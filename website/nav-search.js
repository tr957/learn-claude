(function () {
  var input = document.getElementById('nav-search-input');
  if (!input || typeof SEARCH_DATA === 'undefined') return;

  // Append dropdown to nav so position:absolute top:100% places it below the nav bar
  var nav = document.querySelector('nav');
  var dropdown = document.createElement('div');
  dropdown.className = 'nav-search-dropdown';
  dropdown.style.display = 'none';
  nav.appendChild(dropdown);

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function show(query) {
    var q = query.trim().toLowerCase();
    var matches = q
      ? SEARCH_DATA.filter(function (item) {
          return item.label.toLowerCase().indexOf(q) !== -1
              || item.pageName.toLowerCase().indexOf(q) !== -1;
        })
      : SEARCH_DATA;

    if (matches.length === 0) {
      dropdown.style.display = 'none';
      return;
    }

    dropdown.innerHTML = matches.map(function (item) {
      return '<div class="nav-suggestion-item" data-label="' + escapeHtml(item.label) + '">'
        + '<span class="nav-suggestion-label">' + escapeHtml(item.label) + '</span>'
        + '<span class="nav-suggestion-meta">' + escapeHtml(item.pageName) + '</span>'
        + '</div>';
    }).join('');

    var items = dropdown.querySelectorAll('.nav-suggestion-item');
    for (var i = 0; i < items.length; i++) {
      (function (item) {
        item.addEventListener('mousedown', function (e) {
          e.preventDefault();
          dropdown.style.display = 'none';
          window.location.href = 'search.html?q=' + encodeURIComponent(item.getAttribute('data-label'));
        });
      })(items[i]);
    }

    dropdown.style.display = 'block';
  }

  input.addEventListener('focus', function () { show(input.value); });
  input.addEventListener('click', function () { show(input.value); });
  input.addEventListener('input', function () { show(input.value); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && input.value.trim()) {
      dropdown.style.display = 'none';
      window.location.href = 'search.html?q=' + encodeURIComponent(input.value.trim());
    }
    if (e.key === 'Escape') {
      dropdown.style.display = 'none';
      input.blur();
    }
  });

  document.addEventListener('click', function (e) {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
})();
