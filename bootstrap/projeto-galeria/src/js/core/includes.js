import $ from 'jquery';

const loadHtmlSuccessCallbacks = [];

// eslint-disable-next-line import/prefer-default-export
export function onLoadHtmlSuccess(callback) {
  if (loadHtmlSuccessCallbacks.includes(callback)) return;
  loadHtmlSuccessCallbacks.push(callback);
}

function loadIncludes(parent = 'body') {
  $(parent)
    .find('[wm-include]')
    .each(function loadAjax(i, e) {
      const url = $(e).attr('wm-include');
      $.ajax({
        url,
        success(data) {
          $(e).html(data);
          $(e).removeAttr('wm-include');

          loadHtmlSuccessCallbacks.forEach(callback => callback(data));
          loadIncludes(e);
        },
      });
    });
}
loadIncludes();
