import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import t from 'utils/translator';
import Graph from 'common/components/Graph/';

const ByAction = ({ analyticsData, isLoading, error, duration }) => {
  if (error) {
    return <Graph error={true} />;
  }

  if (isLoading) {
    return <Graph isLoading={true} />;
  }

  if (Object.keys(analyticsData).length === 0) {
    return <Graph isEmpty={true} />;
  }

  // Settle on the time format for the x-axis ticks
  const oneDayInSeconds = moment.duration(1, 'day').asSeconds();
  const timeFormat = duration > oneDayInSeconds ? 'YYYY-MM-DD' : 'HH:mm';

  // Set up the x axis
  const ticks = ['x'].concat(analyticsData.map(({ since }) => moment(since)));

  const accumulatedData = analyticsData.reduce((acc, data) => {
    Object.values(data.rules).forEach(rule => {
      if (!acc[rule.name]) {
        acc[rule.name] = [rule.actions.all];
      } else {
        const length = acc[rule.name].length;
        acc[rule.name].push(acc[rule.name][length - 1] + rule.actions.all);
      }
    });
    return acc;
  }, {});

  // Merge the x axis labels and the data
  const columns = [
    ticks,
    ...Object.entries(accumulatedData).map(([first, rest]) => {
      return [first, ...rest];
    })
  ];

  // Put 'area' in all the fields
  const dataGraphConfig = {
    data: {
      x: 'x',
      columns: columns,
      types: analyticsData.reduce(
        (acc, rule) => Object.assign({}, acc, { [rule[0]]: 'area' }),
        {}
      )
    },
    tooltip: {
      contents: function(
        tooltipData,
        defaultTitleFormat,
        defaultValueFormat,
        color
      ) {
        const [row] = tooltipData;
        const title = ticks[row.x + 1];

        // Who even needs react?
        return `
          <table class="c3-tooltip">
            <tr>
              <th colspan="2">${title}</th>
            </tr>
            <tr class="c3-tooltip-name--${row.id}">
              <td class="name">
                <span style="background-color: ${color(
                  row.id
                )}"></span>${row.name}
              </td>
              <td class="value">
                <div style="text-align: left;">
                  <span style="font-size: 18px"}>${new Number(
                    row.value
                  ).toLocaleString()}</span> ${t(
          'analytics.rate_limiting.graph.requests'
        )}
                </div>
              </td>
            </tr>
          </table>
        `;
      },
      grouped: false
    },
    grid: {
      y: {
        show: true
      }
    },
    legend: {
      position: 'right'
    },
    point: {
      show: false
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          count: 4,
          format: tick => ticks[Math.floor(tick) + 1].format(timeFormat)
        }
      },
      y: {
        label: {
          text: t('analytics.rate_limiting.graph.y_axis'),
          position: 'outer-middle'
        }
      }
    }
  };

  return <Graph config={dataGraphConfig} />;
};

ByAction.propTypes = {
  analyticsData: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  duration: PropTypes.number
};
export default ByAction;
