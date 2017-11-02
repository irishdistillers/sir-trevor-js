"use strict";

var config = require('../config');

module.exports = (block) => {
  return `
    <div class="st-block-description" data-type="${block.type}">
      <svg role="img" class="st-icon">
        <use xlink:href="${config.defaults.iconUrl}#${block.icon_name}"/>
      </svg>
      ${block.title()}
    </div>
  `;
};
