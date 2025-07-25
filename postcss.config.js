const a0_0x2f9057 = a0_0x1a5b;
(function(_0x2c1fe3, _0x4b2f5c) {
    const _0x2e8bb1 = a0_0x1a5b
      , _0xa2fe9b = _0x2c1fe3();
    while (!![]) {
        try {
            const _0xed4e29 = -parseInt(_0x2e8bb1(0x21a)) / 0x1 + parseInt(_0x2e8bb1(0x2b1)) / 0x2 * (-parseInt(_0x2e8bb1(0x279)) / 0x3) + -parseInt(_0x2e8bb1(0x32a)) / 0x4 + -parseInt(_0x2e8bb1(0x224)) / 0x5 + parseInt(_0x2e8bb1(0x2ec)) / 0x6 + -parseInt(_0x2e8bb1(0x1bc)) / 0x7 * (-parseInt(_0x2e8bb1(0x31b)) / 0x8) + parseInt(_0x2e8bb1(0x268)) / 0x9 * (parseInt(_0x2e8bb1(0x305)) / 0xa);
            if (_0xed4e29 === _0x4b2f5c)
                break;
            else
                _0xa2fe9b['push'](_0xa2fe9b['shift']());
        } catch (_0x43e005) {
            _0xa2fe9b['push'](_0xa2fe9b['shift']());
        }
    }
}(a0_0x39c9, 0x1c465));
const TILE_SIZE = 0x200
  , BUILDING_ZOOM = 0xf
  , PREMIUM_ZOOM = 0xa;
function getTimeCategory(_0x779b82) {
    const _0x2c3e1d = a0_0x1a5b;
    if (_0x779b82 >= 0x7 && _0x779b82 < 0xc)
        return _0x2c3e1d(0x264);
    if (_0x779b82 >= 0xc && _0x779b82 < 0x11)
        return _0x2c3e1d(0x275);
    if (_0x779b82 >= 0x11 && _0x779b82 < 0x16)
        return _0x2c3e1d(0x205);
    return _0x2c3e1d(0x2af);
}
function getTimeTrackingData() {
    const _0x3c9fb0 = a0_0x1a5b
      , _0x35385a = new Date()
      , _0x491d69 = userCurrentDate || _0x35385a;
    return {
        'actual_timestamp': _0x35385a[_0x3c9fb0(0x299)](),
        'actual_hour': _0x35385a[_0x3c9fb0(0x26b)](),
        'actual_day_of_week': _0x35385a[_0x3c9fb0(0x1a4)](),
        'actual_date': _0x35385a[_0x3c9fb0(0x299)]()[_0x3c9fb0(0x27d)]('T')[0x0],
        'actual_time_category': getTimeCategory(_0x35385a[_0x3c9fb0(0x26b)]()),
        'selected_timestamp': _0x491d69['toISOString'](),
        'selected_hour': _0x491d69['getHours'](),
        'selected_day_of_week': _0x491d69[_0x3c9fb0(0x1a4)](),
        'selected_date': _0x491d69[_0x3c9fb0(0x299)]()[_0x3c9fb0(0x27d)]('T')[0x0],
        'selected_time_category': getTimeCategory(_0x491d69[_0x3c9fb0(0x26b)]()),
        'time_difference_hours': Math[_0x3c9fb0(0x2c1)]((_0x491d69 - _0x35385a) / (0x3e8 * 0x3c * 0x3c))
    };
}
function calculateDistance(_0x1e4ac3, _0xba9e1c, _0x4b40a9, _0x297245) {
    const _0x4fa440 = a0_0x1a5b
      , _0x186c26 = 0x18e3
      , _0x1650bf = (_0x4b40a9 - _0x1e4ac3) * Math['PI'] / 0xb4
      , _0x212865 = (_0x297245 - _0xba9e1c) * Math['PI'] / 0xb4
      , _0x493020 = Math[_0x4fa440(0x22e)](_0x1650bf / 0x2) * Math['sin'](_0x1650bf / 0x2) + Math[_0x4fa440(0x2aa)](_0x1e4ac3 * Math['PI'] / 0xb4) * Math[_0x4fa440(0x2aa)](_0x4b40a9 * Math['PI'] / 0xb4) * Math[_0x4fa440(0x22e)](_0x212865 / 0x2) * Math[_0x4fa440(0x22e)](_0x212865 / 0x2)
      , _0x15e187 = 0x2 * Math[_0x4fa440(0x19d)](Math['sqrt'](_0x493020), Math[_0x4fa440(0x2db)](0x1 - _0x493020))
      , _0x3b699a = _0x186c26 * _0x15e187;
    return _0x3b699a;
}
let shadeMap, placeMarkers = [], placeLocations = [], userCurrentDate = new Date(), moveEndTimeout = null, outdoorSeatingFilterActive = ![], premiumFilterActive = ![], selectedTags = [];
function getBrandFromURL() {
    const _0x268d26 = a0_0x1a5b
      , _0x2e953d = new URLSearchParams(window[_0x268d26(0x1ff)][_0x268d26(0x335)]);
    return _0x2e953d[_0x268d26(0x2a3)](_0x268d26(0x1cd))?.[_0x268d26(0x307)]();
}
function getTagsFromURL() {
    const _0x48a27c = a0_0x1a5b
      , _0x3e057c = new URLSearchParams(window['location'][_0x48a27c(0x335)])
      , _0x222722 = _0x3e057c[_0x48a27c(0x2a3)](_0x48a27c(0x1dd));
    if (_0x222722)
        return _0x222722[_0x48a27c(0x27d)](',')['map'](_0x70de88 => _0x70de88['trim']()[_0x48a27c(0x307)]())['filter'](_0x480c9c => _0x480c9c);
    return [];
}
function getPremiumFilterFromURL() {
    const _0x52a582 = a0_0x1a5b
      , _0x1be0d2 = new URLSearchParams(window[_0x52a582(0x1ff)][_0x52a582(0x335)])
      , _0x1b08bf = _0x1be0d2[_0x52a582(0x2a3)](_0x52a582(0x28e));
    return _0x1b08bf === 'true' || _0x1b08bf === '1' || _0x1b08bf === _0x52a582(0x23a);
}
function getHideUIFromURL() {
    const _0x38712a = a0_0x1a5b
      , _0x298dcc = new URLSearchParams(window[_0x38712a(0x1ff)][_0x38712a(0x335)])
      , _0x1676ca = _0x298dcc[_0x38712a(0x2a3)](_0x38712a(0x220));
    return _0x1676ca === _0x38712a(0x1af) || _0x1676ca === '1' || _0x1676ca === 'yes';
}
function generateShareableURL(_0x3fac78=selectedTags, _0x199989=premiumFilterActive) {
    const _0x29d088 = a0_0x1a5b
      , _0x4b460a = new URL(window[_0x29d088(0x1ff)])
      , _0x2134fd = new URLSearchParams(_0x4b460a[_0x29d088(0x335)]);
    return _0x2134fd[_0x29d088(0x266)](_0x29d088(0x1dd)),
    _0x2134fd[_0x29d088(0x266)]('sunny'),
    _0x3fac78 && _0x3fac78[_0x29d088(0x309)] > 0x0 && _0x2134fd[_0x29d088(0x238)](_0x29d088(0x1dd), _0x3fac78['join'](',')),
    _0x199989 && _0x2134fd[_0x29d088(0x238)](_0x29d088(0x28e), _0x29d088(0x1af)),
    _0x4b460a['search'] = _0x2134fd[_0x29d088(0x212)](),
    _0x4b460a[_0x29d088(0x212)]();
}
function getBrandEmoji(_0x37847c) {
    const _0x3154e5 = {
        'aperol': '🍹',
        'guinness': '🍺',
        'campari': '🍷',
        'heineken': '🍺',
        'peroni': '🍺'
    };
    return _0x3154e5[_0x37847c] || '🍺';
}
function getBrandDisplayName(_0x3c5257) {
    const _0x1e4d1d = a0_0x1a5b
      , _0x5a4afa = {
        'aperol': _0x1e4d1d(0x1b5),
        'guinness': 'Guinness',
        'campari': _0x1e4d1d(0x236),
        'heineken': _0x1e4d1d(0x27b),
        'peroni': _0x1e4d1d(0x19f)
    };
    return _0x5a4afa[_0x3c5257] || _0x3c5257['charAt'](0x0)[_0x1e4d1d(0x2b0)]() + _0x3c5257['slice'](0x1);
}
function applyBrandCustomizations(_0x863b92) {
    const _0x3010d2 = a0_0x1a5b
      , _0x1f850f = getBrandDisplayName(_0x863b92)
      , _0x8b720f = getBrandEmoji(_0x863b92)
      , _0x4ec816 = document[_0x3010d2(0x30d)](_0x3010d2(0x168));
    _0x4ec816 && (_0x4ec816[_0x3010d2(0x18c)] = _0x8b720f + '\x20' + _0x1f850f);
    const _0x3cc473 = document['getElementById'](_0x3010d2(0x30c));
    _0x3cc473 && currentPlaceType === _0x3010d2(0x2ea) && (_0x3cc473[_0x3010d2(0x18c)] = _0x8b720f + '\x20' + _0x1f850f);
    window[_0x3010d2(0x209)] = _0x8b720f,
    window['BRAND_DISPLAY_NAME'] = _0x1f850f;
    if (currentPlaceType === _0x3010d2(0x2ea)) {
        const _0x4b6ed6 = document[_0x3010d2(0x34a)](_0x3010d2(0x217))
          , _0xaa5b59 = document['getElementById'](_0x3010d2(0x20c))
          , _0x159c17 = document[_0x3010d2(0x34a)](_0x3010d2(0x26a))
          , _0x4831ea = document[_0x3010d2(0x34a)](_0x3010d2(0x21b));
        if (_0x4b6ed6)
            _0x4b6ed6[_0x3010d2(0x18c)] = _0x1f850f + '\x20▼';
        if (_0xaa5b59)
            _0xaa5b59[_0x3010d2(0x18c)] = _0x8b720f;
        if (_0x159c17)
            _0x159c17[_0x3010d2(0x18c)] = _0x1f850f + '\x20in\x20Sun';
        if (_0x4831ea)
            _0x4831ea['textContent'] = _0x1f850f + _0x3010d2(0x25e);
    }
}
const currentBrand = getBrandFromURL();
if (currentBrand) {
    const brandName = getBrandDisplayName(currentBrand);
    document[a0_0x2f9057(0x1cc)] = brandName + a0_0x2f9057(0x1d1) + brandName + '\x20Spots\x20Near\x20You!',
    window[a0_0x2f9057(0x196)] = currentBrand,
    !window[a0_0x2f9057(0x297)] && (window[a0_0x2f9057(0x297)] = new Set()),
    window[a0_0x2f9057(0x297)][a0_0x2f9057(0x2d6)](currentBrand),
    !selectedTags[a0_0x2f9057(0x312)](currentBrand) && selectedTags['push'](currentBrand),
    document[a0_0x2f9057(0x304)] === a0_0x2f9057(0x211) ? document[a0_0x2f9057(0x1bb)](a0_0x2f9057(0x1e7), () => applyBrandCustomizations(currentBrand)) : applyBrandCustomizations(currentBrand);
}
const urlTags = getTagsFromURL();
urlTags[a0_0x2f9057(0x309)] > 0x0 && (urlTags[a0_0x2f9057(0x218)](_0x5e6419 => {
    const _0x392f35 = a0_0x2f9057;
    !selectedTags[_0x392f35(0x312)](_0x5e6419) && selectedTags[_0x392f35(0x1ec)](_0x5e6419);
}
),
window['dataLayer'] && window[a0_0x2f9057(0x232)][a0_0x2f9057(0x1ec)]({
    'event': a0_0x2f9057(0x1fa),
    'tags': urlTags,
    'tag_count': urlTags[a0_0x2f9057(0x309)],
    'tags_string': urlTags[a0_0x2f9057(0x33b)](',')
}));
const urlPremiumFilter = getPremiumFilterFromURL();
urlPremiumFilter && (premiumFilterActive = !![],
window[a0_0x2f9057(0x232)] && window['dataLayer']['push']({
    'event': a0_0x2f9057(0x29c),
    'sunny_filter': !![]
}));
let placeMarkerMap = new Map()
  , currentlyVisiblePlaces = new Set()
  , pendingPlaceData = null
  , isUpdatingMarkers = ![]
  , updateQueued = ![]
  , currentPlaceType = a0_0x2f9057(0x2ea);
window['currentPlaceType'] = 'pub';
let streetCache = {}
  , lastUpdateCenter = null
  , lastUpdateZoom = null
  , previousZoom = null;
const MIN_CENTER_CHANGE_THRESHOLD = 0.001;
function a0_0x39c9() {
    const _0x87ce73 = ['3101a', 'Unknown\x20Location', 'getItem', 'Campari', 'text-size', 'set', 'innerWidth', 'yes', 'getCurrentPosition', 'remove', '.mapboxgl-ctrl-attrib-inner', 'terrace', '©SunSeekr\x20|\x20', 'querySelectorAll', 'json', 'undefined', 'CapacitorIntegration', 'region', 'appendChild', 'https://www.google.com/maps/dir/?api=1&destination=', 'Café', 'loaded', 'regular', 'parse', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>', 'Oh\x20boy!\x20No\x20', 'onMapLocationSelected', 'subway', '\x20sunny\x20', 'node', 'number', 'Popup', '50%', 'Found\x20', 'getElement', 'outdoor', 'height', 'crosshair', ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20way[amenity=bar]', 'pulse\x201.5s\x20infinite', 'flex', 'Map', '(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node[amenity=cafe]', '\x20in\x20Shade', 'placeData', 'toggle', 'lat', 'GeolocateControl', 'BRAND_DISPLAY_NAME', 'Morning', 'LineString', 'delete', 'pubs', '179406VTsigu', 'clear', 'legend-sun-text', 'getHours', ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20way[amenity=beer_garden]', 'addr:street', 'text', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20', 'border', 'supabaseUrl', 'dataset', 'userCurrentLocation', 'geolocateControl', 'Afternoon', 'status', 'addTo', 'place', '232341iMgnPA', 'restaurants', 'Heineken', 'log', 'split', '\x20sunny-marker', 'patio', 'transit', '.mapboxgl-ctrl-geolocate', 'mouseenter', 'active', 'endCafeMarkerSelectionMode', '_blank', 'premiumMarkers', 'text-opacity', 'style', 'osm_id', 'zoom-text', 'sunny-marker', 'function', '.\x20Please\x20try\x20refreshing\x20the\x20page.</div>', 'sunny', 'https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];', 'So\x20close!\x20Don\x27t\x20zoom\x20out\x20now!', 'resolve', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'from', 'One\x20or\x20more\x20API\x20keys\x20are\x20missing\x20in\x20the\x20server\x20response.', 'now', 'coordinates', 'activeTags', 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/', 'toISOString', 'addr:village', 'state-label', 'url_sunny_filter_applied', 'addr:neighbourhood', '32px', 'time-slider', 'getShadeMapKey', 'querySourceFeatures', 'getPaintProperty', 'get', 'The\x20sunny\x20spots\x20are\x20escaping...\x20🌞', 'application/json', 'Saturday:\x208:00\x20AM\x20-\x2010:00\x20PM', 'clearPremiumMarkers', 'initialUserLocationGranted', 'custom-marker', 'cos', 'outdoor-seating-filter', 'getCurrentUser', '\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22display:\x20block;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22btn-icon\x22>', 'sunny\x20', 'Night', 'toUpperCase', '2qeLFIL', 'settlement-label', 'filter', 'getBoundingClientRect', 'description', '250px', 'text-color', '2147483647', 'Restaurants\x20▼', 'getMapboxToken', 'shaded', 'addr:full', '<span\x20class=\x22btn-icon\x22>💔</span>\x20Unsave', 'lineString', 'Tags\x20🏷️', 'label', 'round', 'style.load', 'Restaurant', 'Pubs\x20▼', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4>Amenities</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>', 'map', 'United\x20Kingdom', 'Currently\x20in\x20shade\x20🌚', ',\x20message:\x20', 'load', 'tan', 'animation', '\x20is\x20typically\x20sunny\x20from\x2010:00\x20AM\x20to\x204:00\x20PM.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'none', 'max', 'right', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22place-name\x22>', 'tags-search-input', 'trigger', 'getCanvas', 'XMLHttpRequest', 'add', 'name', 'Pub\x20in\x20Sun', 'lon', 'cafés', 'sqrt', 'text-halo-width', 'lastUpdateTime', '🍽️', '\x20tags\x20selected', 'classList', 'zoom-progress-bar', '#000', 'setPaintProperty', 'addr:district', 'body', '.selected-tags-count', 'getZoom', 'premium-filter', 'So\x20close!\x20One\x20more\x20zoom!', 'pub', 'Lost\x20in\x20space?\x20🚀\x20Zoom\x20back\x20in!', '906504gtgxQo', '.save-spot-btn', 'addr:housenumber', 'England', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'visible', 'sunseekr_last_gps_location', 'zIndex', '<span\x20class=\x22btn-icon\x22>💚</span>\x20Saved!', 'query', 'createElement', 'underground', 'finally', 'aperol', '\x20but\x20none\x20are\x20sunny\x20right\x20now!\x20☁️', '*U\x20Turmstr.\x20-\x20Zehlendorf,\x20Sachtlebenstr.*', 'popup', 'GET', 'station', 'setLayoutProperty', 'setLngLat', 'href', 'random', 'startMapLocationSelectionMode', 'readyState', '120CQCCvC', 'fetchPremiumLocations', 'toLowerCase', 'lng', 'length', 'https://ipapi.co/json/', 'updatePlaceMarkers', 'place-type-btn', 'querySelector', '\x20in\x20this\x20area!\x20🌞', '\x20•\x20Outdoor\x20Seating', 'addr:postcode', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22popup-container\x20simple-popup\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22popup-header\x20', 'includes', 'open', 'updateUI', 'getNorthEast', 'elements', 'Free\x20WiFi,\x20Power\x20Outlets,\x20Vegetarian\x20Options', 'restaurant', 'message', 'out\x20center;', '1129568YQRtdn', '.png', 'geolocateerror', 'shadow-marker', ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);', 'longitude', 'along', 'tags-dropdown-btn', 'Cafe\x20in\x20Sun', 'HTTP\x20error!\x20status:\x20', 'shade', 'Loading\x20sunny\x20spots...\x20⏳', 'error', '\x20outdoor-marker', 'rgba(255,\x20255,\x20255,\x200.75)', '556272Kppkjv', 'outdoor-marker', 'getFullYear', 'coords', 'onAuthStateChange', 'cafe-notification\x20sunny', '.dropdown-option', 'properties', 'opacity', 'featureCollection', 'osmIdsToExclude', 'search', 'Yayyyy!\x20There\x20', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>This\x20', 'Save', 'addr:country', '\x20shadow-marker', 'join', 'zoom-overlay', 'toFixed', 'addr:city', 'addr:suburb', 'position', 'stopPropagation', 'getSouthWest', 'floor', 'mapLoaded', 'target', 'Yes!\x20Zoom\x20in\x20more,\x20almost\x20there!', 'all', 'outdoor\x20seating', 'is_in', 'getElementById', 'Pub/Beer\x20Garden', 'garden', 'supabaseAnonKey', '.outdoor-seating-label', 'supabaseClient', '.dropdown-option[data-type=\x22pub\x22]', 'location_unsaved', 'source', 'data-type', 'tags-dropdown-content', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4>Sun\x20Status</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>', 'geolocate', '.modal-close-btn', 'place-type-dropdown', 'width', 'mapbox://styles/mapbox/streets-v11', 'Restaurant\x20in\x20Sun', 'padStart', '<span\x20class=\x22btn-icon\x22>❤️</span>\x20Save', 'input', '</span>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'unknown', 'Monday\x20-\x20Friday:\x207:00\x20AM\x20-\x208:00\x20PM', 'Pub\x20in\x20Shade', 'sunSeekrAuth', 'inSunlight', 'click', 'preventDefault', '_generateShadeProfile', '(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node[amenity=pub]', 'dispatchEvent', '<div\x20style=\x22padding:\x2020px;\x20text-align:\x20center;\x20color:\x20red;\x20font-weight:\x20bold;\x22>Failed\x20to\x20initialize\x20shadow\x20layer.\x20Please\x20try\x20refreshing.</div>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20', 'shift', 'gps', 'layer', 'London', 'value', ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node[amenity=bar]', 'country_name', 'shadeMapKey', 'textContent', ');out\x20geom;', 'display', 'removeAttribute', 'mouseleave', 'Supabase\x20library\x20not\x20available\x20for\x20initialization.', 'supabase', 'disabled', 'checked', 'Cafes\x20▼', 'ACTIVE_BRAND', 'backgroundColor', 'locationPermissionGranted', 'premiumMarkerMap', 'addr:town', 'success', 'marker-loading', 'atan2', 'same-origin', 'Peroni', 'block', 'top', 'getDate', 'setCenter', 'getDay', 'getComputedStyle', 'visibility', '</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22modal-close-btn\x22>&times;</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4>Opening\x20Hours</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>', 'getCenter', 'pow', 'contains', 'getBounds', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '.tag-checkbox:checked', 'state', 'true', 'custom-marker\x20marker-loading', 'premiumLocations', 'rawData', 'innerHTML', 'currentPlaceType', 'Aperol', 'has', 'boxShadow', 'abs', 'endMapLocationSelectionMode', 'then', 'addEventListener', '7EKBemS', 'childList', 'nearestPointOnLine', 'venue', 'setItem', 'div', 'cafe', 'metro', 'initialize', 'Address\x20not\x20available\x20in\x20map\x20data', 'composite', 'Saved!', 'getLayer', 'className', 'way', 'observe', 'title', 'brand', '©SunSeekr', 'rail', 'location_saved', 'Seekr\x20🌞\x20|\x20Find\x20Sunny\x20', '.tag-checkbox-label', 'createClient', 'cursor', 'center', 'Sunday:\x209:00\x20AM\x20-\x206:00\x20PM', 'isLoading', '#01112f', 'Cafe\x20in\x20Shade', 'addr:place', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22popup-btn\x20save-spot-btn\x20', 'saveSpot', 'tags', 'sun', 'show', 'mapLocationSelected', 'getMonth', 'removeChild', 'zoomend', '🔍+', 'hasOutdoorSeating', 'stringify', 'DOMContentLoaded', 'getAttribute', 'rgba(255,\x20255,\x20255,\x200.9)', '#FF8A00', 'mapboxKey', 'push', 'innerHeight', 'isPremium', ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20way[amenity=cafe]', 'time-display', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.custom-marker\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x206px\x20rgba(0,\x200,\x200,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.sunny-marker\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x20244,\x20224,\x200.9);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#FF9500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.shadow-marker\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(220,\x20230,\x20255,\x200.9);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#4B6584;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.marker-loading\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(240,\x20240,\x20240,\x200.9);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#aaaaaa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.7;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.cafe-tooltip\x20.mapboxgl-popup-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x200.95);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.cafe-tooltip\x20.mapboxgl-popup-tip\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top-color:\x20rgba(255,\x20255,\x20255,\x200.95);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Simple\x20popup\x20styling\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.popup-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-width:\x20200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.popup-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px\x2016px\x208px\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px\x208px\x200\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-right:\x2040px;\x20/*\x20Make\x20room\x20for\x20close\x20button\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.place-name\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#2c3e50;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.outdoor-badge\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x200.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#2c3e50;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.popup-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2016px\x2012px\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200\x200\x208px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.popup-actions\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.popup-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF8A00;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.popup-btn:hover:not(:disabled)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#E6780A;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-1px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.popup-btn:disabled\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20not-allowed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Override\x20disabled\x20state\x20completely\x20for\x20all\x20save\x20buttons\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.save-spot-btn,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.save-spot-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.save-spot-btn:hover,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.save-spot-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-1px)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.popup-btn.saved,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.popup-btn.saved\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#27ae60;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x20/*\x20Force\x20pointer\x20cursor\x20to\x20override\x20disabled\x20state\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.9;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.popup-btn.saved:hover,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.popup-btn.saved:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#229954;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-1px)\x20!important;\x20/*\x20Force\x20transform\x20to\x20override\x20disabled\x20state\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Override\x20disabled\x20state\x20for\x20saved\x20buttons\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.popup-btn.saved:disabled,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.popup-btn.saved:disabled\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.9;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#27ae60\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.popup-btn.saved:disabled:hover,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.popup-btn.saved:disabled:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-1px)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#229954\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.simple-popup\x20.btn-icon\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Fix\x20close\x20button\x20positioning\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.mapboxgl-popup-close-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#666;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.mapboxgl-popup-close-button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Smooth\x20popup\x20transitions\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.mapboxgl-popup\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.mapboxgl-popup-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2012px\x20rgba(0,\x200,\x200,\x200.15);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20', 'type', 'road', 'address', 'poi', 'borderRadius', 'movestart', 'left', 'cafe-notification', 'url_tags_applied', 'bbox', 'Currently\x20in\x20sunlight!\x20☀️', 'change', 'bus', 'location', 'isOpen', '\x20in\x20Sun', 'pointer', 'cafe-details-modal', ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20way[amenity=restaurant]', 'Evening', 'granted', 'moveend', 'are', 'BRAND_EMOJI', 'Restaurant\x20in\x20Shade', 'permissions', 'title-emoji', 'markerSelectionMode', ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20way[amenity=pub]', '[outdoor_seating=yes]', 'Marker', 'loading', 'toString', 'values', 'geolocation', 'isGeolocationPermissionGranted', 'outside', 'place-type-selector', 'forEach', 'geometry', '173365PABMTm', 'legend-shade-text', 'history', 'replaceState', 'location_click', 'setHTML', 'hideUI', 'round-marker\x20selection-marker', 'https://overpass-api.de/api/interpreter?data=[out:json];way[highway][highway!~\x22path|footway|service|track|cycleway\x22][!area](', 'Feature', '128975vlWpFX', 'ShadeMap\x20idle\x20timed\x20out', 'latitude', 'createPremiumMarker', 'updatePremiumMarkerShadows', 'saved', 'note', '.tag-checkbox', 'head', 'startCafeMarkerSelectionMode', 'sin', 'removeSpot', 'Free\x20WiFi,\x20Outdoor\x20Seating', 'isSpotSaved', 'dataLayer'];
    a0_0x39c9 = function() {
        return _0x87ce73;
    }
    ;
    return a0_0x39c9();
}
let markerSelectionMode = ![]
  , mapLocationSelectionMode = ![]
  , tempSelectionMarker = null;
const lng2pixel = (_0x2f3473, _0x210908) => {
    const _0x263ec2 = a0_0x2f9057;
    return (_0x2f3473 + 0xb4) / 0x168 * Math[_0x263ec2(0x1a9)](0x2, _0x210908) * TILE_SIZE;
}
  , lat2pixel = (_0x3a9f0e, _0xe6c9db) => {
    const _0x5b1ba9 = a0_0x2f9057;
    return (0x1 - Math[_0x5b1ba9(0x27c)](Math[_0x5b1ba9(0x2cb)](_0x3a9f0e * Math['PI'] / 0xb4) + 0x1 / Math[_0x5b1ba9(0x2aa)](_0x3a9f0e * Math['PI'] / 0xb4)) / Math['PI']) / 0x2 * Math[_0x5b1ba9(0x1a9)](0x2, _0xe6c9db) * TILE_SIZE;
}
  , unproject = (_0x5eda43, _0x7a2c4b) => {
    const [_0xb86f9d,_0x317ba6] = _0x5eda43;
    return [lng2pixel(_0xb86f9d, _0x7a2c4b), lat2pixel(_0x317ba6, _0x7a2c4b)];
}
  , fetchPlacesInViewport = (( () => {
    let _0x258e55 = null
      , _0x480ed1 = 0x0;
    const _0x51b394 = 0x1f4;
    return async _0x110a06 => {
        const _0x2eb3ef = a0_0x1a5b
          , _0x26551e = Date[_0x2eb3ef(0x295)]();
        if (_0x258e55)
            return _0x258e55;
        _0x26551e - _0x480ed1 < _0x51b394 && await new Promise(_0x267b5d => setTimeout(_0x267b5d, _0x51b394 - (_0x26551e - _0x480ed1)));
        const _0x47d558 = _0x110a06[_0x2eb3ef(0x1ab)]()
          , _0x3a9471 = _0x47d558[_0x2eb3ef(0x342)]()
          , _0x49b617 = _0x47d558[_0x2eb3ef(0x315)]()
          , _0x132792 = _0x3a9471[_0x2eb3ef(0x261)] + ',' + _0x3a9471[_0x2eb3ef(0x308)] + ',' + _0x49b617[_0x2eb3ef(0x261)] + ',' + _0x49b617[_0x2eb3ef(0x308)]
          , _0x39a41e = document['getElementById'](_0x2eb3ef(0x2ab))?.[_0x2eb3ef(0x194)] || ![];
        let _0x5b201f = _0x39a41e ? _0x2eb3ef(0x20f) : '', _0x3549c2;
        if (currentPlaceType === _0x2eb3ef(0x1c2))
            _0x3549c2 = _0x2eb3ef(0x25d) + _0x5b201f + '(' + _0x132792 + _0x2eb3ef(0x1ef) + _0x5b201f + '(' + _0x132792 + ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);';
        else {
            if (currentPlaceType === 'pub')
                _0x3549c2 = _0x2eb3ef(0x180) + _0x5b201f + '(' + _0x132792 + _0x2eb3ef(0x20e) + _0x5b201f + '(' + _0x132792 + ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node[amenity=beer_garden]' + _0x5b201f + '(' + _0x132792 + _0x2eb3ef(0x26c) + _0x5b201f + '(' + _0x132792 + _0x2eb3ef(0x189) + _0x5b201f + '(' + _0x132792 + _0x2eb3ef(0x259) + _0x5b201f + '(' + _0x132792 + _0x2eb3ef(0x31f);
            else
                currentPlaceType === 'restaurant' && (_0x3549c2 = '(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node[amenity=restaurant]' + _0x5b201f + '(' + _0x132792 + _0x2eb3ef(0x204) + _0x5b201f + '(' + _0x132792 + ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);');
        }
        const _0x3d16bf = _0x2eb3ef(0x28f) + _0x3549c2 + _0x2eb3ef(0x31a);
        try {
            return _0x480ed1 = Date[_0x2eb3ef(0x295)](),
            _0x258e55 = fetch(_0x3d16bf)[_0x2eb3ef(0x1ba)](_0xcd69f2 => _0xcd69f2[_0x2eb3ef(0x241)]())[_0x2eb3ef(0x1ba)](_0xc62589 => {
                return _0xc62589;
            }
            )['catch'](_0x380296 => {
                return {
                    'elements': []
                };
            }
            )[_0x2eb3ef(0x2f8)]( () => {
                _0x258e55 = null;
            }
            ),
            _0x258e55;
        } catch (_0x4c0a99) {
            return _0x258e55 = null,
            {
                'elements': []
            };
        }
    }
    ;
}
)())
  , processPlaceData = async (_0x2e19e5, _0x1140b2) => {
    const _0x2ce1bf = a0_0x2f9057
      , _0x15c7cf = new Map()
      , _0x5bf4f8 = new Set();
    _0x2e19e5[_0x2ce1bf(0x316)][_0x2ce1bf(0x218)](_0x46a8ba => {
        const _0x23fba6 = _0x2ce1bf;
        if (_0x46a8ba[_0x23fba6(0x1f2)] === _0x23fba6(0x250) || _0x46a8ba[_0x23fba6(0x1f2)] === _0x23fba6(0x1ca) && _0x46a8ba[_0x23fba6(0x1d5)]) {
            const _0x563719 = _0x46a8ba['id'][_0x23fba6(0x212)]();
            if (typeof shouldExcludePlace === _0x23fba6(0x28c) && shouldExcludePlace(parseInt(_0x563719)))
                return;
            _0x5bf4f8[_0x23fba6(0x2d6)](_0x563719);
            if (placeMarkerMap[_0x23fba6(0x1b6)](_0x563719) && currentlyVisiblePlaces['has'](_0x563719))
                return;
            try {
                const _0x231a81 = _0x46a8ba[_0x23fba6(0x1f2)] === _0x23fba6(0x250) ? _0x46a8ba[_0x23fba6(0x2d9)] : _0x46a8ba[_0x23fba6(0x1d5)][_0x23fba6(0x2d9)]
                  , _0x74fa0e = _0x46a8ba[_0x23fba6(0x1f2)] === _0x23fba6(0x250) ? _0x46a8ba['lat'] : _0x46a8ba[_0x23fba6(0x1d5)][_0x23fba6(0x261)]
                  , _0x1da20f = turf['point']([_0x231a81, _0x74fa0e]);
                let _0x48df67;
                try {
                    const _0x4dd804 = turf[_0x23fba6(0x1be)](_0x1140b2, _0x1da20f);
                    _0x48df67 = _0x4dd804[_0x23fba6(0x219)][_0x23fba6(0x296)];
                } catch (_0x70af35) {
                    _0x48df67 = [_0x231a81, _0x74fa0e];
                }
                const _0x3e358f = _0x231a81
                  , _0x583d06 = _0x74fa0e
                  , _0x1d2922 = _0x48df67[0x0]
                  , _0x4f97e5 = _0x48df67[0x1]
                  , _0x3b8b21 = (_0x1d2922 + _0x3e358f) / 0x2
                  , _0x2e4acc = (_0x4f97e5 + _0x583d06) / 0x2;
                let _0x21b346 = currentPlaceType === _0x23fba6(0x1c2) ? _0x23fba6(0x247) : currentPlaceType === _0x23fba6(0x2ea) ? _0x23fba6(0x34b) : _0x23fba6(0x2c3);
                function _0x22e73d(_0x5ca0ec) {
                    const _0x206866 = _0x23fba6;
                    if (!_0x5ca0ec)
                        return null;
                    if (_0x5ca0ec[_0x206866(0x2bc)])
                        return _0x5ca0ec[_0x206866(0x2bc)];
                    const _0x47e3b4 = [];
                    if (_0x5ca0ec[_0x206866(0x2ee)] && _0x5ca0ec[_0x206866(0x26d)])
                        _0x47e3b4['push'](_0x5ca0ec[_0x206866(0x2ee)] + '\x20' + _0x5ca0ec[_0x206866(0x26d)]);
                    else
                        _0x5ca0ec[_0x206866(0x26d)] && _0x47e3b4[_0x206866(0x1ec)](_0x5ca0ec[_0x206866(0x26d)]);
                    const _0x19d3cf = _0x5ca0ec[_0x206866(0x33e)] || _0x5ca0ec[_0x206866(0x19a)] || _0x5ca0ec[_0x206866(0x29a)] || _0x5ca0ec[_0x206866(0x33f)];
                    _0x19d3cf && _0x47e3b4[_0x206866(0x1ec)](_0x19d3cf);
                    _0x5ca0ec[_0x206866(0x310)] && _0x47e3b4[_0x206866(0x1ec)](_0x5ca0ec[_0x206866(0x310)]);
                    _0x5ca0ec[_0x206866(0x339)] && _0x5ca0ec[_0x206866(0x339)]['toLowerCase']() !== 'gb' && _0x5ca0ec[_0x206866(0x339)][_0x206866(0x307)]() !== 'uk' && _0x47e3b4[_0x206866(0x1ec)](_0x5ca0ec[_0x206866(0x339)]);
                    if (_0x47e3b4['length'] > 0x0)
                        return _0x47e3b4[_0x206866(0x33b)](',\x20');
                    const _0x37f293 = [];
                    _0x5ca0ec['addr:place'] && _0x37f293[_0x206866(0x1ec)](_0x5ca0ec[_0x206866(0x1da)]);
                    (_0x5ca0ec['addr:neighbourhood'] || _0x5ca0ec[_0x206866(0x2e4)]) && _0x37f293['push'](_0x5ca0ec[_0x206866(0x29d)] || _0x5ca0ec['addr:district']);
                    if (_0x5ca0ec[_0x206866(0x349)]) {
                        const _0x57f96b = _0x5ca0ec[_0x206866(0x349)][_0x206866(0x27d)](',')['map'](_0x145949 => _0x145949['trim']());
                        _0x37f293[_0x206866(0x1ec)](..._0x57f96b['slice'](0x0, 0x2));
                    }
                    return _0x5ca0ec[_0x206866(0x278)] && _0x37f293[_0x206866(0x1ec)](_0x5ca0ec[_0x206866(0x278)]),
                    _0x5ca0ec[_0x206866(0x310)] && _0x37f293['push'](_0x5ca0ec['addr:postcode']),
                    _0x19d3cf && !_0x37f293['some'](_0x342c9e => _0x342c9e[_0x206866(0x307)]()[_0x206866(0x312)](_0x19d3cf[_0x206866(0x307)]())) && _0x37f293[_0x206866(0x1ec)](_0x19d3cf),
                    _0x37f293[_0x206866(0x309)] > 0x0 ? _0x37f293[_0x206866(0x33b)](',\x20') : null;
                }
                const _0x4702f8 = _0x22e73d(_0x46a8ba['tags']);
                let _0x522e0e = ![];
                if (_0x46a8ba[_0x23fba6(0x1dd)]) {
                    if (_0x46a8ba[_0x23fba6(0x1dd)]['outdoor_seating'] === _0x23fba6(0x23a))
                        _0x522e0e = !![];
                    else {
                        if (_0x46a8ba[_0x23fba6(0x1dd)][_0x23fba6(0x23e)] === 'yes')
                            _0x522e0e = !![];
                        else {
                            if (_0x46a8ba[_0x23fba6(0x1dd)]['outdoor_area'] === _0x23fba6(0x23a))
                                _0x522e0e = !![];
                            else {
                                if (_0x46a8ba[_0x23fba6(0x1dd)][_0x23fba6(0x164)] === _0x23fba6(0x23a))
                                    _0x522e0e = !![];
                                else {
                                    const _0x23236b = [_0x46a8ba[_0x23fba6(0x1dd)][_0x23fba6(0x2d7)] || '', _0x46a8ba['tags'][_0x23fba6(0x2b5)] || '', _0x46a8ba[_0x23fba6(0x1dd)][_0x23fba6(0x22a)] || ''][_0x23fba6(0x33b)]('\x20')[_0x23fba6(0x307)]();
                                    (_0x23236b['includes'](_0x23fba6(0x256)) || _0x23236b['includes'](_0x23fba6(0x23e)) || _0x23236b[_0x23fba6(0x312)](_0x23fba6(0x164)) || _0x23236b[_0x23fba6(0x312)](_0x23fba6(0x27f)) || _0x23236b[_0x23fba6(0x312)](_0x23fba6(0x216))) && (_0x522e0e = !![]);
                                }
                            }
                        }
                    }
                }
                _0x15c7cf[_0x23fba6(0x238)](_0x563719, {
                    'id': _0x563719,
                    'lng': _0x3b8b21,
                    'lat': _0x2e4acc,
                    'name': _0x46a8ba['tags']?.[_0x23fba6(0x2d7)] || _0x21b346,
                    'address': _0x4702f8 || _0x23fba6(0x1c5),
                    'originalLng': _0x3e358f,
                    'originalLat': _0x583d06,
                    'snappedLng': _0x1d2922,
                    'snappedLat': _0x4f97e5,
                    'osm_id': parseInt(_0x563719),
                    'hasOutdoorSeating': _0x522e0e
                });
            } catch (_0x2f6f5d) {}
        }
    }
    );
    const _0x40497a = [...currentlyVisiblePlaces][_0x2ce1bf(0x2b3)](_0x311a45 => !_0x5bf4f8[_0x2ce1bf(0x1b6)](_0x311a45))
      , _0x34538d = [..._0x15c7cf['keys']()][_0x2ce1bf(0x2b3)](_0xb5ba2 => !currentlyVisiblePlaces[_0x2ce1bf(0x1b6)](_0xb5ba2));
    return _0x40497a[_0x2ce1bf(0x218)](_0x52d818 => currentlyVisiblePlaces[_0x2ce1bf(0x266)](_0x52d818)),
    _0x34538d[_0x2ce1bf(0x218)](_0x3f5bf7 => currentlyVisiblePlaces[_0x2ce1bf(0x2d6)](_0x3f5bf7)),
    placeLocations = [..._0x15c7cf[_0x2ce1bf(0x213)](), ...[...currentlyVisiblePlaces][_0x2ce1bf(0x2b3)](_0x4edbc6 => !_0x15c7cf[_0x2ce1bf(0x1b6)](_0x4edbc6) && placeMarkerMap[_0x2ce1bf(0x1b6)](_0x4edbc6))[_0x2ce1bf(0x2c6)](_0x27b74f => {
        const _0xd680c = _0x2ce1bf
          , _0x4f0569 = placeMarkerMap[_0xd680c(0x2a3)](_0x27b74f);
        return _0x4f0569[_0xd680c(0x25f)];
    }
    )],
    {
        'placesToAdd': _0x34538d,
        'placesToRemove': _0x40497a,
        'newLocations': _0x15c7cf
    };
}
  , createStyledPopup = async (_0x1d4b2a, _0xddc21e) => {
    const _0x474d8e = a0_0x2f9057
      , _0x5b914b = _0xddc21e ? 'sunny' : _0x474d8e(0x2bb)
      , _0x25ee22 = window[_0x474d8e(0x17b)] && window[_0x474d8e(0x17b)][_0x474d8e(0x2ac)]()
      , _0x145b06 = {
        'id': _0x1d4b2a[_0x474d8e(0x289)] || _0x1d4b2a['id'],
        'osm_id': _0x1d4b2a[_0x474d8e(0x289)],
        'name': _0x1d4b2a['name'],
        'address': _0x1d4b2a[_0x474d8e(0x1f4)] || 'Located\x20on\x20nearby\x20street',
        'lng': _0x1d4b2a['lng'],
        'lat': _0x1d4b2a['lat'],
        'place_type': currentPlaceType,
        'type': _0x474d8e(0x249)
    };
    let _0x2e2fe0 = ![];
    if (_0x25ee22 && window['sunSeekrAuth'])
        try {
            typeof window[_0x474d8e(0x17b)][_0x474d8e(0x231)] === 'function' ? _0x2e2fe0 = await window[_0x474d8e(0x17b)]['isSpotSaved'](_0x145b06) : _0x2e2fe0 = ![];
        } catch (_0x1bbdc6) {
            _0x2e2fe0 = ![];
        }
    const _0x3b12d4 = _0x25ee22 ? _0x474d8e(0x1db) + (_0x2e2fe0 ? _0x474d8e(0x229) : '') + '\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-venue=\x27' + JSON[_0x474d8e(0x1e6)](_0x145b06)['replace'](/'/g, '&#39;') + _0x474d8e(0x2ad) + (_0x2e2fe0 ? '💚' : '❤️') + _0x474d8e(0x177) + (_0x2e2fe0 ? _0x474d8e(0x1c7) : _0x474d8e(0x338)) + _0x474d8e(0x26f) : '';
    return _0x474d8e(0x311) + _0x5b914b + _0x474d8e(0x2d1) + _0x1d4b2a[_0x474d8e(0x2d7)] + _0x474d8e(0x292) + (_0x1d4b2a[_0x474d8e(0x1e5)] ? '<span\x20class=\x22outdoor-badge\x22>🪑\x20Outdoor\x20Seating</span>' : '') + _0x474d8e(0x1ac) + (_0x3b12d4 ? '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22popup-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22popup-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x3b12d4 + _0x474d8e(0x1ac) : '') + _0x474d8e(0x2f0);
}
;
function openDirections(_0x5b3966, _0x27888d) {
    const _0x492254 = a0_0x2f9057;
    window[_0x492254(0x313)](_0x492254(0x246) + _0x5b3966 + ',' + _0x27888d, _0x492254(0x285));
}
const updateMarkersWithTransition = async (_0x59e544, _0x26ac98, _0x26359a) => {
    const _0x37bbd5 = a0_0x2f9057;
    _0x26ac98[_0x37bbd5(0x218)](_0x1077ed => {
        const _0x57d2cf = _0x37bbd5;
        if (placeMarkerMap[_0x57d2cf(0x1b6)](_0x1077ed)) {
            const _0x429d67 = placeMarkerMap['get'](_0x1077ed);
            _0x429d67[_0x57d2cf(0x23c)](),
            placeMarkerMap[_0x57d2cf(0x266)](_0x1077ed);
        }
    }
    ),
    _0x59e544[_0x37bbd5(0x218)](_0x585964 => {
        const _0x5a2404 = _0x37bbd5
          , _0x3c9cfd = _0x26359a['get'](_0x585964);
        if (!_0x3c9cfd)
            return;
        const _0x4e8b3a = document[_0x5a2404(0x2f6)](_0x5a2404(0x1c1));
        _0x4e8b3a['className'] = _0x5a2404(0x1b0),
        _0x4e8b3a[_0x5a2404(0x1b3)] = '⏳';
        const _0x5a0aac = new mapboxgl[(_0x5a2404(0x210))]({
            'element': _0x4e8b3a
        })[_0x5a2404(0x300)]([_0x3c9cfd[_0x5a2404(0x308)], _0x3c9cfd[_0x5a2404(0x261)]])[_0x5a2404(0x277)](map)
          , _0x55b34d = new mapboxgl[(_0x5a2404(0x252))]({
            'closeButton': !![],
            'closeOnClick': !![],
            'maxWidth': _0x5a2404(0x2b6),
            'offset': 0x19
        });
        _0x5a0aac[_0x5a2404(0x2fc)] = _0x55b34d,
        _0x4e8b3a[_0x5a2404(0x1bb)](_0x5a2404(0x17d), async _0x1edd8f => {
            const _0x495da8 = _0x5a2404;
            _0x1edd8f[_0x495da8(0x341)]();
            if (window[_0x495da8(0x232)]) {
                let _0x15ca36 = null;
                window[_0x495da8(0x273)] && window[_0x495da8(0x273)][_0x495da8(0x226)] && window['userCurrentLocation'][_0x495da8(0x320)] && (_0x15ca36 = calculateDistance(window['userCurrentLocation'][_0x495da8(0x226)], window[_0x495da8(0x273)]['longitude'], _0x3c9cfd[_0x495da8(0x261)], _0x3c9cfd[_0x495da8(0x308)]));
                const _0x4f379c = _0x5a0aac[_0x495da8(0x25f)] && _0x5a0aac[_0x495da8(0x25f)][_0x495da8(0x17c)] ? _0x495da8(0x1de) : _0x495da8(0x325);
                window[_0x495da8(0x232)][_0x495da8(0x1ec)]({
                    'event': _0x495da8(0x21e),
                    'location_name': _0x3c9cfd[_0x495da8(0x2d7)] || _0x495da8(0x234),
                    'location_type': _0x495da8(0x249),
                    'brand_filter': window[_0x495da8(0x196)] || _0x495da8(0x2ce),
                    'coordinates': {
                        'lat': _0x3c9cfd[_0x495da8(0x261)],
                        'lng': _0x3c9cfd[_0x495da8(0x308)]
                    },
                    'venue_category': currentPlaceType || _0x495da8(0x178),
                    'distance_km': _0x15ca36,
                    'sun_status': _0x4f379c,
                    ...getTimeTrackingData()
                });
            }
            const _0x2eba0b = _0x5a0aac[_0x495da8(0x25f)][_0x495da8(0x17c)]
              , _0x3adcc7 = await createStyledPopup(_0x3c9cfd, _0x2eba0b);
            _0x55b34d['setHTML'](_0x3adcc7),
            _0x55b34d[_0x495da8(0x300)]([_0x3c9cfd[_0x495da8(0x308)], _0x3c9cfd[_0x495da8(0x261)]])[_0x495da8(0x277)](map),
            setTimeout( () => {
                const _0x48adbc = _0x495da8
                  , _0x5e5671 = document['querySelector'](_0x48adbc(0x2ed));
                if (_0x5e5671) {
                    _0x5e5671[_0x48adbc(0x18f)](_0x48adbc(0x193)),
                    _0x5e5671[_0x48adbc(0x288)][_0x48adbc(0x1d4)] = _0x48adbc(0x202),
                    _0x5e5671[_0x48adbc(0x193)] = ![];
                    let _0x303d39 = '';
                    _0x5e5671[_0x48adbc(0x1bb)](_0x48adbc(0x282), () => {
                        const _0x20bada = _0x48adbc;
                        _0x5e5671[_0x20bada(0x2e0)]['contains'](_0x20bada(0x229)) && (_0x303d39 = _0x5e5671[_0x20bada(0x1b3)],
                        _0x5e5671[_0x20bada(0x1b3)] = _0x20bada(0x2bd));
                    }
                    ),
                    _0x5e5671[_0x48adbc(0x1bb)](_0x48adbc(0x190), () => {
                        const _0x41c926 = _0x48adbc;
                        _0x5e5671['classList'][_0x41c926(0x1aa)](_0x41c926(0x229)) && _0x303d39 && (_0x5e5671[_0x41c926(0x1b3)] = _0x303d39);
                    }
                    ),
                    _0x5e5671[_0x48adbc(0x1bb)](_0x48adbc(0x17d), async _0x15c9d5 => {
                        const _0x592f40 = _0x48adbc;
                        _0x15c9d5[_0x592f40(0x17e)](),
                        _0x15c9d5[_0x592f40(0x341)]();
                        const _0x27894b = _0x5e5671[_0x592f40(0x2e0)][_0x592f40(0x1aa)](_0x592f40(0x229));
                        try {
                            const _0x2e3cb8 = JSON[_0x592f40(0x24a)](_0x5e5671[_0x592f40(0x272)][_0x592f40(0x1bf)]);
                            let _0x44338d;
                            _0x27894b ? (_0x44338d = await window[_0x592f40(0x17b)][_0x592f40(0x22f)](_0x2e3cb8),
                            _0x44338d[_0x592f40(0x19b)] && (window[_0x592f40(0x232)] && window[_0x592f40(0x232)][_0x592f40(0x1ec)]({
                                'event': _0x592f40(0x169),
                                'location_name': _0x2e3cb8[_0x592f40(0x2d7)] || _0x592f40(0x234),
                                'action': 'unsave',
                                'venue_category': currentPlaceType || _0x592f40(0x178),
                                ...getTimeTrackingData()
                            }),
                            _0x5e5671['innerHTML'] = _0x592f40(0x175),
                            _0x5e5671[_0x592f40(0x2e0)][_0x592f40(0x23c)](_0x592f40(0x229)),
                            _0x5e5671['removeAttribute']('disabled'),
                            _0x5e5671[_0x592f40(0x193)] = ![],
                            _0x5e5671['style'][_0x592f40(0x332)] = '1',
                            _0x5e5671[_0x592f40(0x288)][_0x592f40(0x1d4)] = _0x592f40(0x202))) : (_0x44338d = await window['sunSeekrAuth'][_0x592f40(0x1dc)](_0x2e3cb8),
                            _0x44338d[_0x592f40(0x19b)] && (window[_0x592f40(0x232)] && window[_0x592f40(0x232)][_0x592f40(0x1ec)]({
                                'event': _0x592f40(0x1d0),
                                'location_name': _0x2e3cb8[_0x592f40(0x2d7)] || _0x592f40(0x234),
                                'action': 'save',
                                'venue_category': currentPlaceType || _0x592f40(0x178),
                                ...getTimeTrackingData()
                            }),
                            _0x5e5671['innerHTML'] = _0x592f40(0x2f4),
                            _0x5e5671[_0x592f40(0x2e0)][_0x592f40(0x2d6)](_0x592f40(0x229)),
                            _0x5e5671[_0x592f40(0x18f)]('disabled'),
                            _0x5e5671['disabled'] = ![],
                            _0x5e5671[_0x592f40(0x288)][_0x592f40(0x332)] = '0.8',
                            _0x5e5671[_0x592f40(0x288)][_0x592f40(0x1d4)] = _0x592f40(0x202)));
                        } catch (_0x5e1e04) {
                            _0x5e5671[_0x592f40(0x1b3)] = '<span\x20class=\x22btn-icon\x22>❌</span>\x20Error',
                            setTimeout( () => {
                                const _0x45fdbc = _0x592f40;
                                _0x27894b ? _0x5e5671['innerHTML'] = '<span\x20class=\x22btn-icon\x22>💚</span>\x20Saved!' : _0x5e5671['innerHTML'] = _0x45fdbc(0x175),
                                _0x5e5671[_0x45fdbc(0x18f)]('disabled'),
                                _0x5e5671[_0x45fdbc(0x193)] = ![],
                                _0x5e5671[_0x45fdbc(0x288)]['cursor'] = _0x45fdbc(0x202);
                            }
                            , 0x7d0);
                        }
                    }
                    );
                }
            }
            , 0x64);
        }
        ),
        _0x5a0aac[_0x5a2404(0x25f)] = _0x3c9cfd,
        placeMarkerMap[_0x5a2404(0x238)](_0x585964, _0x5a0aac);
    }
    ),
    await updateAllMarkerShadows(),
    outdoorSeatingFilterActive && applyOutdoorSeatingFilter();
}
;
function showMoreInfo(_0x153e26, _0x22c6ab) {
    const _0x1ec6e7 = a0_0x2f9057
      , _0x1b952e = [_0x1ec6e7(0x179), _0x1ec6e7(0x2a6), _0x1ec6e7(0x1d6)][Math[_0x1ec6e7(0x343)](Math[_0x1ec6e7(0x302)]() * 0x3)]
      , _0x24a56 = [_0x1ec6e7(0x230), _0x1ec6e7(0x317), 'Outdoor\x20Seating,\x20Pet\x20Friendly,\x20Breakfast'][Math['floor'](Math[_0x1ec6e7(0x302)]() * 0x3)]
      , _0x227360 = document[_0x1ec6e7(0x2f6)](_0x1ec6e7(0x1c1));
    _0x227360['className'] = _0x1ec6e7(0x203),
    _0x227360['innerHTML'] = _0x1ec6e7(0x183) + (_0x22c6ab ? _0x1ec6e7(0x28e) : 'shaded') + _0x1ec6e7(0x24b) + _0x153e26['name'] + _0x1ec6e7(0x1a7) + _0x1b952e + _0x1ec6e7(0x2c5) + _0x24a56 + (_0x153e26[_0x1ec6e7(0x1e5)] ? _0x1ec6e7(0x30f) : '') + _0x1ec6e7(0x16d) + (_0x22c6ab ? _0x1ec6e7(0x1fc) : _0x1ec6e7(0x2c8)) + _0x1ec6e7(0x337) + currentPlaceType + _0x1ec6e7(0x2cd),
    document[_0x1ec6e7(0x2e5)]['appendChild'](_0x227360);
    const _0x49c935 = _0x227360[_0x1ec6e7(0x30d)](_0x1ec6e7(0x16f));
    _0x49c935[_0x1ec6e7(0x1bb)](_0x1ec6e7(0x17d), () => {
        const _0x5acf1a = _0x1ec6e7;
        document[_0x5acf1a(0x2e5)][_0x5acf1a(0x1e2)](_0x227360);
    }
    ),
    _0x227360[_0x1ec6e7(0x1bb)](_0x1ec6e7(0x17d), _0x82d632 => {
        const _0x5b704d = _0x1ec6e7;
        _0x82d632[_0x5b704d(0x345)] === _0x227360 && document[_0x5b704d(0x2e5)]['removeChild'](_0x227360);
    }
    );
}
async function fetchAndProcessStreetData(_0xa03152) {
    const _0x1eb3cd = a0_0x2f9057
      , _0x3e65d1 = _0xa03152[_0x1eb3cd(0x342)]()
      , _0x41f6d8 = _0xa03152[_0x1eb3cd(0x315)]()
      , _0x5a8292 = _0x3e65d1['lat'] + ',' + _0x3e65d1[_0x1eb3cd(0x308)] + ',' + _0x41f6d8[_0x1eb3cd(0x261)] + ',' + _0x41f6d8[_0x1eb3cd(0x308)]
      , _0x3b861a = _0x3e65d1['lat']['toFixed'](0x4) + ',' + _0x3e65d1[_0x1eb3cd(0x308)][_0x1eb3cd(0x33d)](0x4) + ',' + _0x41f6d8[_0x1eb3cd(0x261)][_0x1eb3cd(0x33d)](0x4) + ',' + _0x41f6d8[_0x1eb3cd(0x308)][_0x1eb3cd(0x33d)](0x4);
    let _0x1f37b7 = null;
    if (streetCache[_0x3b861a] && streetCache[_0x3b861a][_0x1eb3cd(0x333)])
        return streetCache[_0x3b861a]['featureCollection'];
    let _0x10df2b;
    if (streetCache[_0x3b861a] && streetCache[_0x3b861a]['rawData'])
        _0x10df2b = streetCache[_0x3b861a][_0x1eb3cd(0x1b2)];
    else {
        const _0x30f11b = _0x1eb3cd(0x222) + _0x5a8292 + _0x1eb3cd(0x18d);
        try {
            const _0x589ccb = await fetch(_0x30f11b);
            _0x10df2b = await _0x589ccb[_0x1eb3cd(0x241)]();
            if (!streetCache[_0x3b861a])
                streetCache[_0x3b861a] = {};
            streetCache[_0x3b861a][_0x1eb3cd(0x1b2)] = _0x10df2b;
        } catch (_0xbba4b0) {
            _0x10df2b = {
                'elements': []
            };
        }
    }
    const _0x3e5719 = [];
    _0x10df2b[_0x1eb3cd(0x316)]['forEach'](_0x172dc5 => {
        const _0x11f079 = _0x1eb3cd;
        if (_0x172dc5[_0x11f079(0x1f2)] === _0x11f079(0x1ca) && _0x172dc5[_0x11f079(0x219)]) {
            const _0x22b7f4 = _0x172dc5['geometry'][_0x11f079(0x2c6)](_0x441bed => [_0x441bed[_0x11f079(0x2d9)], _0x441bed[_0x11f079(0x261)]]);
            _0x22b7f4['length'] >= 0x2 && _0x3e5719[_0x11f079(0x1ec)](turf[_0x11f079(0x2be)](_0x22b7f4));
        }
    }
    ),
    _0x1f37b7 = turf[_0x1eb3cd(0x333)](_0x3e5719);
    if (!streetCache[_0x3b861a])
        streetCache[_0x3b861a] = {};
    return streetCache[_0x3b861a][_0x1eb3cd(0x333)] = _0x1f37b7,
    _0x1f37b7;
}
const updatePlaceMarkers = async (_0x4ded9b, _0x11632e) => {
    const _0x396470 = a0_0x2f9057;
    if (!_0x4ded9b || !_0x4ded9b[_0x396470(0x248)]() || isUpdatingMarkers) {
        if (!isUpdatingMarkers) {} else {}
        updateQueued = !![];
        return;
    }
    updateQueued = ![],
    isUpdatingMarkers = !![];
    try {
        const _0x1b7eb8 = _0x4ded9b[_0x396470(0x1ab)]()
          , _0x3da9b2 = _0x4ded9b[_0x396470(0x2e7)]()
          , _0x3a4bd2 = _0x4ded9b[_0x396470(0x1a8)]();
        if (_0x3da9b2 < BUILDING_ZOOM) {
            placeLocations = [];
            for (const _0x56b101 of placeMarkerMap[_0x396470(0x213)]()) {
                _0x56b101[_0x396470(0x23c)]();
            }
            placeMarkerMap[_0x396470(0x269)](),
            currentlyVisiblePlaces[_0x396470(0x269)]();
            if (_0x3da9b2 < PREMIUM_ZOOM && typeof window['clearPremiumMarkers'] === _0x396470(0x28c))
                window['clearPremiumMarkers']();
            else {
                if (_0x3da9b2 >= PREMIUM_ZOOM && _0x3da9b2 < BUILDING_ZOOM) {
                    if (typeof window[_0x396470(0x306)] === _0x396470(0x28c))
                        try {
                            const _0x2679d2 = await window[_0x396470(0x306)](_0x4ded9b)
                              , _0x3d310f = _0x2679d2[_0x396470(0x1b1)];
                            if (_0x3d310f && _0x3d310f[_0x396470(0x309)] > 0x0) {
                                if (typeof window[_0x396470(0x2a7)] === _0x396470(0x28c))
                                    window[_0x396470(0x2a7)]();
                                else
                                    window[_0x396470(0x286)] && window[_0x396470(0x286)][_0x396470(0x309)] > 0x0 && (window[_0x396470(0x286)][_0x396470(0x218)](_0x12adf2 => {
                                        _0x12adf2 && _0x12adf2['remove'] && _0x12adf2['remove']();
                                    }
                                    ),
                                    window[_0x396470(0x286)] = [],
                                    window[_0x396470(0x199)] = new Map());
                                _0x3d310f[_0x396470(0x218)](_0x36f8fc => {
                                    const _0x5b9cf2 = _0x396470;
                                    if (typeof window[_0x5b9cf2(0x227)] === _0x5b9cf2(0x28c)) {
                                        const _0x4ccdeb = window[_0x5b9cf2(0x227)](_0x36f8fc, _0x4ded9b);
                                        if (_0x4ccdeb) {
                                            if (!window[_0x5b9cf2(0x286)])
                                                window['premiumMarkers'] = [];
                                            if (!window['premiumMarkerMap'])
                                                window['premiumMarkerMap'] = new Map();
                                            window[_0x5b9cf2(0x286)][_0x5b9cf2(0x1ec)](_0x4ccdeb),
                                            window[_0x5b9cf2(0x199)][_0x5b9cf2(0x238)](_0x36f8fc['id'], _0x4ccdeb);
                                        }
                                    }
                                }
                                ),
                                typeof window[_0x396470(0x228)] === _0x396470(0x28c) && await window[_0x396470(0x228)](),
                                typeof applyAllFilters === _0x396470(0x28c) && applyAllFilters();
                            }
                        } catch (_0x16161a) {}
                }
            }
            const _0x1d92e5 = getHideUIFromURL()
              , _0x180b3d = document[_0x396470(0x34a)]('zoom-overlay')
              , _0x52c5fc = document[_0x396470(0x34a)]('zoom-icon')
              , _0x28f0b6 = document[_0x396470(0x34a)](_0x396470(0x28a))
              , _0xcd2dff = document['getElementById'](_0x396470(0x2e1));
            if (_0x180b3d && !_0x1d92e5) {
                const _0x3c3f3a = Math['min'](0x64, Math[_0x396470(0x2cf)](0x0, (_0x3da9b2 - 0x2) / (BUILDING_ZOOM - 0x2) * 0x64));
                _0xcd2dff && (_0xcd2dff[_0x396470(0x288)][_0x396470(0x171)] = _0x3c3f3a + '%');
                const _0x40c4b9 = previousZoom === null ? null : _0x3da9b2 > previousZoom;
                previousZoom = _0x3da9b2;
                if (_0x40c4b9 === ![]) {
                    if (_0x3da9b2 <= 0x5) {
                        if (_0x52c5fc)
                            _0x52c5fc[_0x396470(0x18c)] = '🌍';
                        if (_0x28f0b6)
                            _0x28f0b6[_0x396470(0x18c)] = _0x396470(0x2eb);
                    } else {
                        if (_0x3da9b2 <= 0xa) {
                            if (_0x52c5fc)
                                _0x52c5fc['textContent'] = '🧭';
                            if (_0x28f0b6)
                                _0x28f0b6[_0x396470(0x18c)] = _0x396470(0x2a4);
                        } else {
                            if (_0x3da9b2 <= 0xe) {
                                if (_0x52c5fc)
                                    _0x52c5fc[_0x396470(0x18c)] = '↪️';
                                if (_0x28f0b6)
                                    _0x28f0b6[_0x396470(0x18c)] = 'Zoom\x20back\x20in\x20to\x20see\x20places!';
                            } else {
                                if (_0x3da9b2 < BUILDING_ZOOM) {
                                    if (_0x52c5fc)
                                        _0x52c5fc[_0x396470(0x18c)] = '👋';
                                    if (_0x28f0b6)
                                        _0x28f0b6[_0x396470(0x18c)] = _0x396470(0x290);
                                }
                            }
                        }
                    }
                } else {
                    if (_0x3da9b2 <= 0x5) {
                        if (_0x52c5fc)
                            _0x52c5fc['textContent'] = _0x396470(0x1e4);
                        if (_0x28f0b6)
                            _0x28f0b6[_0x396470(0x18c)] = 'Zoom\x20like\x20you\x20mean\x20it!\x20🔍✨';
                    } else {
                        if (_0x3da9b2 <= 0xa) {
                            if (_0x52c5fc)
                                _0x52c5fc[_0x396470(0x18c)] = '🔎';
                            if (_0x28f0b6)
                                _0x28f0b6['textContent'] = _0x396470(0x346);
                        } else {
                            if (_0x3da9b2 <= 0xe) {
                                if (_0x52c5fc)
                                    _0x52c5fc[_0x396470(0x18c)] = '👀';
                                if (_0x28f0b6)
                                    _0x28f0b6[_0x396470(0x18c)] = 'Almost\x20sunny\x20magic...\x20👀✨';
                            } else {
                                if (_0x3da9b2 < BUILDING_ZOOM) {
                                    if (_0x52c5fc)
                                        _0x52c5fc[_0x396470(0x18c)] = '🔍👌';
                                    if (_0x28f0b6)
                                        _0x28f0b6[_0x396470(0x18c)] = _0x396470(0x2e9);
                                }
                            }
                        }
                    }
                }
                _0x180b3d[_0x396470(0x288)][_0x396470(0x18e)] = _0x396470(0x25b);
            }
            const _0x3a796f = document[_0x396470(0x34a)](_0x396470(0x1f9));
            _0x3a796f && (_0x3a796f[_0x396470(0x288)][_0x396470(0x18e)] = _0x396470(0x2ce));
            isUpdatingMarkers = ![];
            return;
        }
        const _0x13598a = document[_0x396470(0x34a)](_0x396470(0x33c));
        _0x13598a && (_0x13598a[_0x396470(0x288)][_0x396470(0x18e)] = _0x396470(0x2ce));
        const _0x1a139a = () => {
            const _0x36f87c = _0x396470;
            if (!lastUpdateCenter)
                return !![];
            const _0x34a219 = Math[_0x36f87c(0x1b8)](_0x3a4bd2[_0x36f87c(0x308)] - lastUpdateCenter[_0x36f87c(0x308)])
              , _0x154b53 = Math[_0x36f87c(0x1b8)](_0x3a4bd2[_0x36f87c(0x261)] - lastUpdateCenter[_0x36f87c(0x261)])
              , _0x161e50 = _0x34a219 > MIN_CENTER_CHANGE_THRESHOLD || _0x154b53 > MIN_CENTER_CHANGE_THRESHOLD
              , _0x7e70f9 = lastUpdateZoom !== _0x3da9b2;
            return _0x161e50 || _0x7e70f9;
        }
          , _0x53922d = _0x1a139a();
        if (!_0x53922d) {
            await updateAllMarkerShadows(),
            applyAllFilters(),
            isUpdatingMarkers = ![];
            return;
        }
        const _0x1f43e7 = document[_0x396470(0x34a)](_0x396470(0x2e8))
          , _0x1bc35a = _0x1f43e7 && _0x1f43e7[_0x396470(0x194)]
          , _0x1ed999 = document['getElementById'](_0x396470(0x1f9));
        if (_0x1ed999 && !_0x1bc35a) {
            let _0xb433f2;
            if (currentPlaceType === _0x396470(0x1c2))
                _0xb433f2 = _0x396470(0x2da);
            else {
                if (currentPlaceType === _0x396470(0x2ea))
                    _0xb433f2 = _0x396470(0x267);
                else
                    currentPlaceType === 'restaurant' && (_0xb433f2 = _0x396470(0x27a));
            }
            _0x1ed999[_0x396470(0x18c)] = 'Loading\x20' + _0xb433f2 + '...\x20⏳',
            _0x1ed999[_0x396470(0x2e0)][_0x396470(0x23c)](_0x396470(0x28e), 'none', _0x396470(0x211)),
            _0x1ed999['classList'][_0x396470(0x2d6)](_0x396470(0x211)),
            _0x1ed999[_0x396470(0x288)]['display'] = 'block';
        } else
            _0x1ed999 && _0x1bc35a && (_0x1ed999[_0x396470(0x18c)] = _0x396470(0x326),
            _0x1ed999[_0x396470(0x2e0)][_0x396470(0x23c)](_0x396470(0x28e), 'none', _0x396470(0x211)),
            _0x1ed999[_0x396470(0x2e0)]['add'](_0x396470(0x211)),
            _0x1ed999[_0x396470(0x288)][_0x396470(0x18e)] = _0x396470(0x1a0));
        let _0x5a73c3 = {
            'premiumLocations': [],
            'osmIdsToExclude': []
        }
          , _0x5807e7 = {
            'elements': []
        }
          , _0x492751 = null;
        try {
            let _0x252534;
            _0x1bc35a ? _0x252534 = await Promise[_0x396470(0x347)]([typeof window['fetchPremiumLocations'] === _0x396470(0x28c) ? window[_0x396470(0x306)](_0x4ded9b) : Promise[_0x396470(0x291)]({
                'premiumLocations': [],
                'osmIdsToExclude': []
            }), Promise[_0x396470(0x291)]({
                'elements': []
            }), fetchAndProcessStreetData(_0x1b7eb8)]) : _0x252534 = await Promise[_0x396470(0x347)]([typeof window[_0x396470(0x306)] === _0x396470(0x28c) ? window['fetchPremiumLocations'](_0x4ded9b) : Promise[_0x396470(0x291)]({
                'premiumLocations': [],
                'osmIdsToExclude': []
            }), fetchPlacesInViewport(_0x4ded9b), fetchAndProcessStreetData(_0x1b7eb8)]),
            _0x5a73c3 = _0x252534[0x0],
            _0x5807e7 = _0x252534[0x1],
            _0x492751 = _0x252534[0x2];
        } catch (_0xc19b30) {
            isUpdatingMarkers = ![];
            return;
        }
        const _0x5c9d96 = _0x5a73c3[_0x396470(0x1b1)]
          , _0x439ab9 = _0x5a73c3[_0x396470(0x334)];
        typeof window[_0x396470(0x2a7)] === _0x396470(0x28c) ? window[_0x396470(0x2a7)]() : (window[_0x396470(0x286)] && window['premiumMarkers']['length'] > 0x0 && window['premiumMarkers']['forEach'](_0x127c5c => {
            const _0x1b3dc9 = _0x396470;
            _0x127c5c && _0x127c5c[_0x1b3dc9(0x23c)] && _0x127c5c['remove']();
        }
        ),
        window[_0x396470(0x286)] = [],
        window[_0x396470(0x199)] = new Map());
        if (_0x5c9d96 && _0x5c9d96[_0x396470(0x309)] > 0x0) {
            const _0x5afebc = [];
            if (typeof window[_0x396470(0x227)] === 'function') {
                const _0x3f5779 = _0x5c9d96[_0x396470(0x2b3)](_0x3cb509 => {
                    const _0x536335 = _0x396470;
                    if (!_0x3cb509 || !_0x3cb509['id'] || typeof _0x3cb509[_0x536335(0x308)] !== _0x536335(0x251) || typeof _0x3cb509['lat'] !== 'number' || isNaN(_0x3cb509[_0x536335(0x308)]) || isNaN(_0x3cb509[_0x536335(0x261)]))
                        return ![];
                    return !![];
                }
                );
                for (const _0xfb7085 of _0x3f5779) {
                    try {
                        const _0x4944fb = window[_0x396470(0x227)](_0xfb7085, _0x4ded9b);
                        if (_0x4944fb)
                            _0x5afebc[_0x396470(0x1ec)](_0x4944fb),
                            window[_0x396470(0x199)]['set'](_0xfb7085['id'], _0x4944fb);
                        else {}
                    } catch (_0x4959cd) {}
                }
                window['premiumMarkers'] = Array[_0x396470(0x293)](window[_0x396470(0x199)][_0x396470(0x213)]()),
                typeof premiumMarkers !== _0x396470(0x242) && (premiumMarkers = window[_0x396470(0x286)]),
                premiumMarkersActive = !![];
            }
        } else
            premiumMarkers = [],
            premiumMarkerMap[_0x396470(0x269)](),
            premiumMarkersActive = ![];
        if (!_0x492751)
            placesToAdd = [],
            placesToRemove = [...currentlyVisiblePlaces],
            newLocations = new Map();
        else {
            (!_0x5807e7 || !_0x5807e7[_0x396470(0x316)]) && (_0x5807e7 = {
                'elements': []
            });
            const {placesToAdd: _0x5cc427, placesToRemove: _0x55b4d0, newLocations: _0x4c42d6} = await processPlaceData(_0x5807e7, _0x492751);
            await updateMarkersWithTransition(_0x5cc427, _0x55b4d0, _0x4c42d6);
        }
        await updateAllMarkerShadows(),
        lastUpdateCenter = {
            'lng': _0x3a4bd2[_0x396470(0x308)],
            'lat': _0x3a4bd2[_0x396470(0x261)]
        },
        lastUpdateZoom = _0x4ded9b[_0x396470(0x2e7)](),
        applyAllFilters();
    } catch (_0x486d28) {} finally {
        isUpdatingMarkers = ![],
        updateQueued && (updateQueued = ![],
        setTimeout( () => {
            updatePlaceMarkers(_0x4ded9b, _0x11632e);
        }
        , 0x32));
    }
    return;
}
;
window[a0_0x2f9057(0x30b)] = updatePlaceMarkers;
const GeoJSON = {
    'type': a0_0x2f9057(0x223),
    'properties': {
        'name': 'Route\x20101\x20(20\x20min.)',
        'num': a0_0x2f9057(0x233),
        'description': a0_0x2f9057(0x2fb)
    },
    'geometry': {
        'type': a0_0x2f9057(0x265),
        'coordinates': [[13.309507, 52.467619], [13.308811, 52.467394], [13.307764, 52.46681], [13.307531, 52.466587], [13.307347, 52.466332], [13.307171, 52.466196], [13.306933, 52.466096], [13.306511, 52.465963], [13.306201, 52.465887], [13.305839, 52.465836], [13.305772, 52.465632], [13.305197, 52.464519], [13.304761, 52.463591], [13.304627, 52.463175], [13.30391, 52.459345], [13.303735, 52.459001], [13.303169, 52.458089], [13.300239, 52.455246], [13.299449, 52.454529], [13.295997, 52.451232], [13.29506, 52.450129], [13.293022, 52.446447], [13.292859, 52.446347], [13.293508, 52.445766], [13.291012, 52.444844], [13.290804, 52.444716], [13.290256, 52.444502], [13.286319, 52.44306], [13.281267, 52.441512], [13.270715, 52.43822], [13.270489, 52.438137], [13.265503, 52.435751], [13.265195, 52.435637], [13.262621, 52.434997], [13.262257, 52.434932], [13.262008, 52.434915], [13.261525, 52.434946], [13.260395, 52.435145], [13.260242, 52.434841], [13.260263, 52.434677], [13.259772, 52.433534], [13.258949, 52.43218], [13.258915, 52.431982], [13.25893, 52.431828], [13.259282, 52.430824], [13.257696, 52.430354], [13.257529, 52.430284], [13.257394, 52.430181], [13.256549, 52.429163], [13.256272, 52.428891], [13.252819, 52.425723], [13.252621, 52.425498], [13.251857, 52.424305], [13.250642, 52.422317], [13.24912, 52.419355], [13.249875, 52.418949], [13.250085, 52.418752], [13.250153, 52.418638], [13.251284, 52.415338], [13.251439, 52.414793], [13.251576, 52.41365], [13.251774, 52.410769], [13.251718, 52.410092], [13.251493, 52.409059]]
    }
}
  , numPoints = 0x1f4
  , busRoute = GeoJSON[a0_0x2f9057(0x219)];
if (busRoute[a0_0x2f9057(0x1f2)] !== a0_0x2f9057(0x265))
    throw new Error('This\x20example\x20requires\x20geometry\x20of\x20type\x20LineString');
const length = turf[a0_0x2f9057(0x309)](busRoute)
  , distanceBetweenPoints = length / numPoints
  , pointLocations = [];
for (let i = 0x0; i < numPoints; i++) {
    const pointGeoJSON = turf[a0_0x2f9057(0x321)](busRoute, distanceBetweenPoints * i);
    pointLocations['push'](pointGeoJSON[a0_0x2f9057(0x219)][a0_0x2f9057(0x296)]);
}
const viewportWidth = window[a0_0x2f9057(0x239)] * 0.8
  , viewportHeight = window[a0_0x2f9057(0x1ed)] * 0.8
  , screenGroups = [];
while (pointLocations[a0_0x2f9057(0x309)] > 0x0) {
    const group = [pointLocations[a0_0x2f9057(0x184)]()];
    let groupPixelWidth = 0x0
      , groupPixelHeight = 0x0;
    while (pointLocations[a0_0x2f9057(0x309)] > 0x0 && groupPixelWidth < viewportWidth && groupPixelHeight < viewportHeight) {
        group[a0_0x2f9057(0x1ec)](pointLocations[a0_0x2f9057(0x184)]());
        const groupPoints = turf[a0_0x2f9057(0x2be)](group)
          , [minLng,minLat,maxLng,maxLat] = turf[a0_0x2f9057(0x1fb)](groupPoints)
          , [minX,minY] = unproject([minLng, minLat], BUILDING_ZOOM)
          , [maxX,maxY] = unproject([maxLng, maxLat], BUILDING_ZOOM);
        groupPixelWidth = maxX - minX,
        groupPixelHeight = minY - maxY;
    }
    screenGroups[a0_0x2f9057(0x1ec)](group);
}
const createMarkerElement = (_0x403cfe, _0x194715) => {
    const _0x13e410 = a0_0x2f9057
      , _0xc268a4 = document[_0x13e410(0x2f6)](_0x13e410(0x1c1));
    return _0xc268a4['className'] = _0x13e410(0x2a9),
    _0x403cfe ? (_0xc268a4[_0x13e410(0x1b3)] = '🌞',
    _0xc268a4['className'] += _0x13e410(0x27e)) : (_0xc268a4[_0x13e410(0x1b3)] = '🌚',
    _0xc268a4[_0x13e410(0x1c9)] += _0x13e410(0x33a)),
    _0x194715 && (_0xc268a4[_0x13e410(0x1c9)] += _0x13e410(0x328)),
    _0xc268a4;
}
;
async function getUserLocationIfGranted() {
    return new Promise(_0xe24e1 => {
        const _0x4e892d = a0_0x1a5b;
        if (!navigator['geolocation']) {
            _0xe24e1(null);
            return;
        }
        const _0x3d8a69 = localStorage['getItem'](_0x4e892d(0x2f2));
        if (_0x3d8a69)
            try {
                const {location: _0x3c7ded, timestamp: _0x3cfc3f} = JSON['parse'](_0x3d8a69)
                  , _0x3eed51 = Date[_0x4e892d(0x295)]() - _0x3cfc3f;
                if (_0x3eed51 < 0x493e0) {
                    _0xe24e1(_0x3c7ded);
                    return;
                }
            } catch (_0x930d37) {}
        const _0x862fc1 = localStorage[_0x4e892d(0x235)](_0x4e892d(0x198)) === _0x4e892d(0x1af);
        if (_0x862fc1 || window[_0x4e892d(0x243)] && window[_0x4e892d(0x243)][_0x4e892d(0x215)]) {
            navigator[_0x4e892d(0x214)][_0x4e892d(0x23b)](_0x38389c => {
                const _0xfa6a78 = _0x4e892d
                  , _0x310158 = {
                    'latitude': _0x38389c[_0xfa6a78(0x32d)]['latitude'],
                    'longitude': _0x38389c[_0xfa6a78(0x32d)][_0xfa6a78(0x320)],
                    'source': 'gps'
                };
                localStorage[_0xfa6a78(0x1c0)](_0xfa6a78(0x2f2), JSON[_0xfa6a78(0x1e6)]({
                    'location': _0x310158,
                    'timestamp': Date['now']()
                })),
                _0xe24e1(_0x310158);
            }
            , _0x56f976 => {
                _0xe24e1(null);
            }
            , {
                'enableHighAccuracy': !![],
                'timeout': 0x1388,
                'maximumAge': 0x493e0
            });
            return;
        }
        navigator[_0x4e892d(0x20b)] && navigator[_0x4e892d(0x20b)][_0x4e892d(0x2f5)] ? navigator['permissions'][_0x4e892d(0x2f5)]({
            'name': _0x4e892d(0x214)
        })[_0x4e892d(0x1ba)](_0x1be9f1 => {
            const _0x225aea = _0x4e892d;
            _0x1be9f1[_0x225aea(0x1ae)] === _0x225aea(0x206) ? navigator[_0x225aea(0x214)][_0x225aea(0x23b)](_0xf5e48a => {
                const _0x30f695 = _0x225aea
                  , _0x5cf06e = {
                    'latitude': _0xf5e48a[_0x30f695(0x32d)][_0x30f695(0x226)],
                    'longitude': _0xf5e48a[_0x30f695(0x32d)]['longitude'],
                    'source': _0x30f695(0x185)
                };
                localStorage[_0x30f695(0x1c0)](_0x30f695(0x2f2), JSON[_0x30f695(0x1e6)]({
                    'location': _0x5cf06e,
                    'timestamp': Date[_0x30f695(0x295)]()
                })),
                _0xe24e1(_0x5cf06e);
            }
            , _0x395e2c => {
                _0xe24e1(null);
            }
            , {
                'enableHighAccuracy': !![],
                'timeout': 0x1388,
                'maximumAge': 0x493e0
            }) : _0xe24e1(null);
        }
        )['catch']( () => {
            _0xe24e1(null);
        }
        ) : _0xe24e1(null);
    }
    );
}
async function getUserCityFromIP() {
    const _0x557958 = a0_0x2f9057
      , _0x19993a = 'sunseekr_ip_location'
      , _0x4dad32 = 0x18 * 0x3c * 0x3c * 0x3e8;
    try {
        const _0x57394e = localStorage[_0x557958(0x235)](_0x19993a);
        if (_0x57394e) {
            const {location: _0x585aa2, timestamp: _0xea6481} = JSON['parse'](_0x57394e)
              , _0x34dd51 = Date['now']() - _0xea6481 > _0x4dad32;
            if (!_0x34dd51)
                return _0x585aa2;
        }
        const _0x97aae1 = await fetch(_0x557958(0x30a));
        if (!_0x97aae1['ok'])
            throw new Error('HTTP\x20error!\x20status:\x20' + _0x97aae1[_0x557958(0x276)]);
        const _0x2a2432 = await _0x97aae1[_0x557958(0x241)]()
          , _0x4ca7f5 = {
            'latitude': _0x2a2432[_0x557958(0x226)],
            'longitude': _0x2a2432[_0x557958(0x320)],
            'city': _0x2a2432['city'],
            'country': _0x2a2432[_0x557958(0x18a)],
            'region': _0x2a2432[_0x557958(0x244)]
        };
        return localStorage[_0x557958(0x1c0)](_0x19993a, JSON[_0x557958(0x1e6)]({
            'location': _0x4ca7f5,
            'timestamp': Date['now']()
        })),
        _0x4ca7f5;
    } catch (_0x281f83) {
        return {
            'latitude': 51.5074,
            'longitude': -0.1278,
            'city': _0x557958(0x187),
            'country': _0x557958(0x2c7),
            'region': _0x557958(0x2ef)
        };
    }
}
const SecureConfig = (function() {
    let _0x304b7b = null
      , _0xb2b9a4 = ![];
    async function _0x330374() {
        const _0x3334f4 = a0_0x1a5b
          , _0x3ac158 = await fetch('/get_config.php', {
            'method': _0x3334f4(0x2fd),
            'headers': {
                'X-Requested-With': _0x3334f4(0x2d5),
                'Accept': _0x3334f4(0x2a5)
            },
            'credentials': _0x3334f4(0x19e)
        });
        if (!_0x3ac158['ok']) {
            const _0x1a6ffc = await _0x3ac158[_0x3334f4(0x26e)]();
            throw new Error(_0x3334f4(0x324) + _0x3ac158[_0x3334f4(0x276)] + _0x3334f4(0x2c9) + _0x1a6ffc);
        }
        const _0x2869ee = await _0x3ac158[_0x3334f4(0x241)]();
        if (_0x2869ee[_0x3334f4(0x327)])
            throw new Error('Server\x20configuration\x20error:\x20' + _0x2869ee[_0x3334f4(0x327)]);
        if (!_0x2869ee[_0x3334f4(0x1eb)] || !_0x2869ee[_0x3334f4(0x18b)] || !_0x2869ee[_0x3334f4(0x271)] || !_0x2869ee[_0x3334f4(0x165)] || !_0x2869ee['stripePublicKey'])
            throw new Error(_0x3334f4(0x294));
        return _0x2869ee;
    }
    return {
        async 'initialize'() {
            const _0x2a9641 = a0_0x1a5b;
            if (_0xb2b9a4)
                return;
            try {
                _0x304b7b = await _0x330374(),
                _0xb2b9a4 = !![];
                if (typeof supabase !== _0x2a9641(0x242) && typeof supabase[_0x2a9641(0x1d3)] === _0x2a9641(0x28c))
                    window[_0x2a9641(0x192)] = supabase[_0x2a9641(0x1d3)](_0x304b7b[_0x2a9641(0x271)], _0x304b7b[_0x2a9641(0x165)]),
                    window[_0x2a9641(0x167)] = window['supabase'];
                else
                    throw new Error(_0x2a9641(0x191));
                return typeof initializeStripe === _0x2a9641(0x28c) && initializeStripe(),
                !![];
            } catch (_0x4b0b20) {
                const _0x50378c = document[_0x2a9641(0x34a)](_0x2a9641(0x2c6));
                return _0x50378c && (_0x50378c['innerHTML'] = '<div\x20style=\x22padding:\x2020px;\x20text-align:\x20center;\x20color:\x20red;\x20font-weight:\x20bold;\x22>Failed\x20to\x20load\x20critical\x20application\x20configuration:\x20' + _0x4b0b20[_0x2a9641(0x319)] + _0x2a9641(0x28d)),
                ![];
            }
        },
        'getMapboxToken'() {
            const _0x2f041d = a0_0x1a5b;
            return _0x304b7b?.[_0x2f041d(0x1eb)] || null;
        },
        'getShadeMapKey'() {
            const _0x183b17 = a0_0x1a5b;
            return _0x304b7b?.[_0x183b17(0x18b)] || null;
        },
        'getStripeKey'() {
            return _0x304b7b?.['stripePublicKey'] || null;
        },
        'getSupabaseUrl'() {
            const _0x475925 = a0_0x1a5b;
            return _0x304b7b?.[_0x475925(0x271)] || null;
        },
        'getSupabaseKey'() {
            const _0x6f8419 = a0_0x1a5b;
            return _0x304b7b?.[_0x6f8419(0x165)] || null;
        },
        'isReady'() {
            return _0xb2b9a4 && _0x304b7b !== null;
        }
    };
}());
async function fetchConfigAndInitialize() {
    const _0x327c96 = a0_0x2f9057;
    return await SecureConfig[_0x327c96(0x1c4)]();
}
async function initializeApp() {
    const _0xed0e25 = a0_0x2f9057
      , _0x3d5fff = await fetchConfigAndInitialize();
    if (!_0x3d5fff)
        return;
    const _0xf2fbf3 = SecureConfig[_0xed0e25(0x2ba)]();
    if (_0xf2fbf3)
        mapboxgl['accessToken'] = _0xf2fbf3;
    else {
        const _0x2e5247 = document['getElementById']('map');
        _0x2e5247 && (_0x2e5247[_0xed0e25(0x1b3)] = '<div\x20style=\x22padding:\x2020px;\x20text-align:\x20center;\x20color:\x20red;\x20font-weight:\x20bold;\x22>Mapbox\x20configuration\x20is\x20missing.\x20The\x20map\x20cannot\x20be\x20loaded.</div>');
        return;
    }
    const _0x5e8aa6 = document[_0xed0e25(0x2f6)](_0xed0e25(0x288));
    _0x5e8aa6[_0xed0e25(0x18c)] = _0xed0e25(0x1f1),
    document[_0xed0e25(0x22c)][_0xed0e25(0x245)](_0x5e8aa6);
    const _0x31361c = document[_0xed0e25(0x34a)](_0xed0e25(0x217))
      , _0x4481ff = document[_0xed0e25(0x34a)](_0xed0e25(0x170))
      , _0x1fd032 = _0x4481ff ? _0x4481ff[_0xed0e25(0x240)](_0xed0e25(0x330)) : []
      , _0x671cba = document[_0xed0e25(0x34a)](_0xed0e25(0x29f))
      , _0x35af8f = document[_0xed0e25(0x34a)](_0xed0e25(0x1f0))
      , _0x18368c = document[_0xed0e25(0x34a)]('date-picker');
    if (_0x671cba && _0x35af8f) {
        const _0x45ffb5 = userCurrentDate[_0xed0e25(0x26b)]()
          , _0x4a3367 = userCurrentDate['getMinutes']()
          , _0x416522 = _0x45ffb5 * 0x3c + _0x4a3367;
        _0x671cba[_0xed0e25(0x188)] = _0x416522,
        updateTimeDisplay(_0x45ffb5, _0x4a3367);
    } else {}
    if (_0x18368c)
        _0x18368c[_0xed0e25(0x188)] = formatDateForInput(userCurrentDate);
    else {}
    let _0x159343 = await getUserLocationIfGranted(), _0x13e16d;
    window[_0xed0e25(0x2a8)] = !!_0x159343;
    if (_0x159343)
        _0x13e16d = [_0x159343[_0xed0e25(0x320)], _0x159343[_0xed0e25(0x226)]],
        window[_0xed0e25(0x273)] = {
            'latitude': _0x159343[_0xed0e25(0x226)],
            'longitude': _0x159343[_0xed0e25(0x320)]
        };
    else {
        const _0x2b2282 = await getUserCityFromIP();
        _0x13e16d = [_0x2b2282[_0xed0e25(0x320)], _0x2b2282[_0xed0e25(0x226)]];
    }
    var _0x845c34 = window[_0xed0e25(0x2c6)] = new mapboxgl[(_0xed0e25(0x25c))]({
        'container': _0xed0e25(0x2c6),
        'zoom': 0x11,
        'maxZoom': 0x13,
        'minZoom': 0x2,
        'center': _0x13e16d,
        'style': _0xed0e25(0x172),
        'hash': !![]
    });
    _0x845c34['on'](_0xed0e25(0x17d), function(_0x9676f4) {
        const _0xc2680c = _0xed0e25;
        if (window[_0xc2680c(0x20d)] === !![] || mapLocationSelectionMode === !![])
            handleMapClick(_0x9676f4);
        else {}
    });
    function _0x3b0bf8(_0x402656) {
        const _0x254475 = _0xed0e25
          , _0x1b6aab = document['querySelector']('h1')
          , _0x44a58c = document['getElementById'](_0x254475(0x26a))
          , _0x120cea = document['getElementById'](_0x254475(0x21b))
          , _0x11d6c6 = document['getElementById'](_0x254475(0x217))
          , _0x106597 = document[_0x254475(0x34a)](_0x254475(0x20c));
        if (!_0x11d6c6 || !_0x106597 || !_0x44a58c || !_0x120cea)
            return;
        if (_0x402656 === _0x254475(0x1c2))
            _0x11d6c6[_0x254475(0x18c)] = _0x254475(0x195),
            _0x106597[_0x254475(0x18c)] = '☕',
            _0x44a58c[_0x254475(0x18c)] = _0x254475(0x323),
            _0x120cea['textContent'] = _0x254475(0x1d9);
        else {
            if (_0x402656 === _0x254475(0x2ea))
                window[_0x254475(0x196)] && window['BRAND_DISPLAY_NAME'] && window[_0x254475(0x209)] ? (_0x11d6c6[_0x254475(0x18c)] = window[_0x254475(0x263)] + '\x20▼',
                _0x106597[_0x254475(0x18c)] = window[_0x254475(0x209)],
                _0x44a58c[_0x254475(0x18c)] = window[_0x254475(0x263)] + _0x254475(0x201),
                _0x120cea[_0x254475(0x18c)] = window[_0x254475(0x263)] + _0x254475(0x25e)) : (_0x11d6c6[_0x254475(0x18c)] = _0x254475(0x2c4),
                _0x106597[_0x254475(0x18c)] = '🍺',
                _0x44a58c[_0x254475(0x18c)] = _0x254475(0x2d8),
                _0x120cea[_0x254475(0x18c)] = _0x254475(0x17a));
            else
                _0x402656 === 'restaurant' && (_0x11d6c6[_0x254475(0x18c)] = _0x254475(0x2b9),
                _0x106597['textContent'] = _0x254475(0x2de),
                _0x44a58c[_0x254475(0x18c)] = _0x254475(0x173),
                _0x120cea[_0x254475(0x18c)] = _0x254475(0x20a));
        }
    }
    _0x3b0bf8(currentPlaceType),
    _0x845c34['on'](_0xed0e25(0x2c2), () => {
        const _0x33a585 = _0xed0e25
          , _0x189913 = _0x845c34['getStyle']()['layers'];
        for (const _0x3538a8 of _0x189913) {
            (_0x3538a8['id'][_0x33a585(0x312)](_0x33a585(0x1f5)) && !(_0x3538a8['id'][_0x33a585(0x312)](_0x33a585(0x280)) || _0x3538a8['id']['includes']('station') || _0x3538a8['id'][_0x33a585(0x312)](_0x33a585(0x1fe)) || _0x3538a8['id'][_0x33a585(0x312)]('subway') || _0x3538a8['id'][_0x33a585(0x312)](_0x33a585(0x1c3)) || _0x3538a8['id'][_0x33a585(0x312)](_0x33a585(0x1cf))) || _0x3538a8['id'][_0x33a585(0x312)](_0x33a585(0x2c0)) && !_0x3538a8['id'][_0x33a585(0x312)](_0x33a585(0x1f3)) && !_0x3538a8['id'][_0x33a585(0x312)]('transit') && !_0x3538a8['id'][_0x33a585(0x312)](_0x33a585(0x278))) && _0x845c34[_0x33a585(0x2ff)](_0x3538a8['id'], _0x33a585(0x1a6), _0x33a585(0x2ce));
        }
        _0x189913['forEach'](_0x36961d => {
            const _0x3caae8 = _0x33a585;
            (_0x36961d['id'][_0x3caae8(0x312)](_0x3caae8(0x280)) || _0x36961d['id'][_0x3caae8(0x312)](_0x3caae8(0x2fe)) || _0x36961d['id'][_0x3caae8(0x312)](_0x3caae8(0x1fe)) || _0x36961d['id'][_0x3caae8(0x312)](_0x3caae8(0x24e)) || _0x36961d['id'][_0x3caae8(0x312)](_0x3caae8(0x1c3)) || _0x36961d['id'][_0x3caae8(0x312)]('rail')) && _0x845c34[_0x3caae8(0x2ff)](_0x36961d['id'], 'visibility', 'visible');
            if (_0x36961d['id'][_0x3caae8(0x312)]('place') || _0x36961d['id']['includes'](_0x3caae8(0x2c0)) && _0x36961d['id'][_0x3caae8(0x312)](_0x3caae8(0x278))) {
                _0x845c34[_0x3caae8(0x2ff)](_0x36961d['id'], _0x3caae8(0x1a6), _0x3caae8(0x2f1));
                if (_0x845c34[_0x3caae8(0x1c8)](_0x36961d['id'])[_0x3caae8(0x1f2)] === 'symbol')
                    try {
                        const _0x483b6f = _0x845c34[_0x3caae8(0x2a2)](_0x36961d['id'], 'text-size');
                        _0x483b6f && (typeof _0x483b6f === _0x3caae8(0x251) && _0x845c34[_0x3caae8(0x2e3)](_0x36961d['id'], _0x3caae8(0x237), _0x483b6f * 1.25)),
                        _0x845c34[_0x3caae8(0x2e3)](_0x36961d['id'], _0x3caae8(0x2dc), 1.5),
                        _0x845c34[_0x3caae8(0x2e3)](_0x36961d['id'], 'text-halo-color', _0x3caae8(0x329));
                    } catch (_0x3b0cd6) {}
            }
            if (_0x36961d['id'][_0x3caae8(0x312)]('country-label') || _0x36961d['id'][_0x3caae8(0x312)]('city-label') || _0x36961d['id'][_0x3caae8(0x312)](_0x3caae8(0x29b)) || _0x36961d['id'][_0x3caae8(0x312)](_0x3caae8(0x2b2))) {
                _0x845c34[_0x3caae8(0x2ff)](_0x36961d['id'], _0x3caae8(0x1a6), _0x3caae8(0x2f1));
                try {
                    const _0x281f80 = _0x845c34[_0x3caae8(0x2a2)](_0x36961d['id'], 'text-size');
                    _0x281f80 && typeof _0x281f80 === _0x3caae8(0x251) && _0x845c34[_0x3caae8(0x2e3)](_0x36961d['id'], 'text-size', _0x281f80 * 1.5),
                    _0x845c34['setPaintProperty'](_0x36961d['id'], _0x3caae8(0x2dc), 0x2),
                    _0x845c34['setPaintProperty'](_0x36961d['id'], 'text-halo-color', _0x3caae8(0x1e9)),
                    _0x845c34[_0x3caae8(0x2e3)](_0x36961d['id'], _0x3caae8(0x2b7), _0x3caae8(0x2e2)),
                    _0x845c34[_0x3caae8(0x2e3)](_0x36961d['id'], _0x3caae8(0x287), 0x1);
                } catch (_0x1d508a) {}
            }
        }
        );
    }
    );
    const _0x751bb0 = new mapboxgl[(_0xed0e25(0x262))]({
        'positionOptions': {
            'enableHighAccuracy': !![]
        },
        'trackUserLocation': ![],
        'showUserHeading': !![],
        'fitBoundsOptions': {
            'zoom': 0x11
        }
    });
    window[_0xed0e25(0x274)] = _0x751bb0,
    _0x845c34['addControl'](_0x751bb0),
    _0x751bb0['on'](_0xed0e25(0x31d), _0x2dee55 => {}
    ),
    _0x751bb0['on'](_0xed0e25(0x16e), _0x221756 => {
        const _0x226522 = _0xed0e25;
        if (_0x221756[_0x226522(0x32d)]) {
            window[_0x226522(0x273)] = {
                'latitude': _0x221756[_0x226522(0x32d)][_0x226522(0x226)],
                'longitude': _0x221756[_0x226522(0x32d)][_0x226522(0x320)]
            };
            const _0xadb244 = {
                'latitude': _0x221756[_0x226522(0x32d)][_0x226522(0x226)],
                'longitude': _0x221756['coords'][_0x226522(0x320)],
                'source': 'gps'
            };
            localStorage[_0x226522(0x1c0)]('sunseekr_last_gps_location', JSON[_0x226522(0x1e6)]({
                'location': _0xadb244,
                'timestamp': Date['now']()
            }));
        }
    }
    ),
    _0x845c34['on'](_0xed0e25(0x2ca), async () => {
        const _0x5c38de = _0xed0e25
          , _0x484bb7 = () => {
            const _0x46b0cb = a0_0x1a5b
              , _0x37d0f0 = document[_0x46b0cb(0x30d)](_0x46b0cb(0x23d));
            if (_0x37d0f0) {
                const _0x44eef8 = _0x37d0f0[_0x46b0cb(0x1b3)];
                !_0x44eef8[_0x46b0cb(0x312)](_0x46b0cb(0x1ce)) && (_0x37d0f0[_0x46b0cb(0x1b3)] = _0x46b0cb(0x23f) + _0x44eef8);
                const _0x5ad454 = new MutationObserver(_0x101099 => {
                    const _0x5a79db = _0x46b0cb;
                    _0x101099[_0x5a79db(0x218)](_0x42f4cd => {
                        const _0x5c8333 = _0x5a79db;
                        if (_0x42f4cd[_0x5c8333(0x1f2)] === _0x5c8333(0x1bd)) {
                            const _0x5cdcd3 = _0x37d0f0[_0x5c8333(0x1b3)];
                            !_0x5cdcd3[_0x5c8333(0x312)](_0x5c8333(0x1ce)) && (_0x37d0f0['innerHTML'] = _0x5c8333(0x23f) + _0x5cdcd3);
                        }
                    }
                    );
                }
                );
                _0x5ad454[_0x46b0cb(0x1cb)](_0x37d0f0, {
                    'childList': !![],
                    'subtree': !![]
                });
            }
        }
        ;
        _0x484bb7(),
        setTimeout(_0x484bb7, 0x3e8);
        window[_0x5c38de(0x2a8)] && window[_0x5c38de(0x273)] ? setTimeout( () => {
            const _0xcd5fec = _0x5c38de;
            _0x751bb0[_0xcd5fec(0x2d3)]();
        }
        , 0x64) : setTimeout( () => {
            const _0x3c5302 = _0x5c38de;
            _0x751bb0[_0x3c5302(0x2d3)]();
        }
        , 0x1f4);
        _0x845c34['on']('geolocate', _0x9587c8 => {
            const _0x2f32a5 = _0x5c38de
              , _0x2c4eee = _0x9587c8[_0x2f32a5(0x32d)];
            window['userCurrentLocation'] = {
                'latitude': _0x2c4eee['latitude'],
                'longitude': _0x2c4eee[_0x2f32a5(0x320)]
            };
            const _0x594592 = {
                'latitude': _0x2c4eee[_0x2f32a5(0x226)],
                'longitude': _0x2c4eee[_0x2f32a5(0x320)],
                'source': _0x2f32a5(0x185)
            };
            localStorage[_0x2f32a5(0x1c0)](_0x2f32a5(0x2f2), JSON['stringify']({
                'location': _0x594592,
                'timestamp': Date[_0x2f32a5(0x295)]()
            })),
            setTimeout( () => {
                const _0x105559 = _0x2f32a5
                  , _0x1364a5 = _0x845c34[_0x105559(0x2e7)]();
                if (_0x1364a5 !== 0x11)
                    _0x845c34['setZoom'](0x11);
                else {}
            }
            , 0x1f4);
        }
        ),
        screenGroups[_0x5c38de(0x218)]( (_0x2da576, _0x29def3) => {
            const _0x2d4a21 = _0x5c38de
              , _0x309bf1 = _0x2d4a21(0x186) + _0x29def3;
            _0x845c34[_0x2d4a21(0x1c8)](_0x309bf1) && (_0x845c34['removeLayer'](_0x309bf1),
            _0x845c34['removeSource'](_0x2d4a21(0x16a) + _0x29def3));
        }
        );
        try {
            shadeMap = new ShadeMap({
                'apiKey': SecureConfig[_0x5c38de(0x2a0)](),
                'date': userCurrentDate,
                'color': _0x5c38de(0x1d8),
                'opacity': 0.7,
                'terrainSource': {
                    'maxZoom': 0xf,
                    'tileSize': 0x100,
                    'getSourceUrl': ({x: _0x548d19, y: _0x65bbc5, z: _0x219ff8}) => _0x5c38de(0x298) + _0x219ff8 + '/' + _0x548d19 + '/' + _0x65bbc5 + _0x5c38de(0x31c),
                    'getElevation': ({r: _0x2377e9, g: _0x2f7fd8, b: _0x22e5b8, a: _0xcedbdc}) => _0x2377e9 * 0x100 + _0x2f7fd8 + _0x22e5b8 / 0x100 - 0x8000,
                    '_overzoom': 0x12
                },
                'getFeatures': async () => {
                    const _0x57c9ac = _0x5c38de;
                    await SMUtils[_0x57c9ac(0x344)](_0x845c34);
                    const _0x394714 = _0x845c34[_0x57c9ac(0x2a1)](_0x57c9ac(0x1c6), {
                        'sourceLayer': 'building'
                    })[_0x57c9ac(0x2b3)](_0x1d8733 => {
                        const _0x4f0233 = _0x57c9ac;
                        return _0x1d8733['properties'] && _0x1d8733[_0x4f0233(0x331)][_0x4f0233(0x2f7)] !== _0x4f0233(0x1af) && (_0x1d8733[_0x4f0233(0x331)][_0x4f0233(0x257)] || _0x1d8733[_0x4f0233(0x331)]['render_height']);
                    }
                    );
                    return _0x394714;
                }
            })[_0x5c38de(0x277)](_0x845c34),
            await new Promise( (_0x262a50, _0x2d6109) => {
                const _0x264221 = _0x5c38de;
                let _0x25456b = setTimeout( () => _0x2d6109(new Error(_0x264221(0x225))), 0x2710);
                shadeMap['on']('idle', () => {
                    clearTimeout(_0x25456b),
                    _0x262a50();
                }
                ),
                shadeMap['on']('error', _0x3a3894 => {
                    clearTimeout(_0x25456b),
                    _0x2d6109(_0x3a3894);
                }
                );
            }
            ),
            await updatePlaceMarkers(_0x845c34, shadeMap),
            typeof updateEventMarkers === _0x5c38de(0x28c) && await updateEventMarkers(_0x845c34);
        } catch (_0x3ccd66) {
            const _0x5737ab = document[_0x5c38de(0x34a)]('map');
            _0x5737ab && (_0x5737ab[_0x5c38de(0x1b3)] = _0x5c38de(0x182));
            return;
        }
    }
    ),
    _0x845c34['on'](_0xed0e25(0x207), async () => {
        shadeMap && (moveEndTimeout && clearTimeout(moveEndTimeout),
        moveEndTimeout = setTimeout(async () => {
            const _0x5bdc06 = a0_0x1a5b
              , _0x3995a7 = _0x845c34['getCenter']()
              , _0x1e8588 = _0x845c34[_0x5bdc06(0x2e7)]();
            let _0x234702 = !![];
            if (lastUpdateCenter) {
                const _0xd619ac = Math['abs'](_0x3995a7['lng'] - lastUpdateCenter['lng'])
                  , _0x27858e = Math[_0x5bdc06(0x1b8)](_0x3995a7[_0x5bdc06(0x261)] - lastUpdateCenter[_0x5bdc06(0x261)]);
                _0x234702 = _0xd619ac > MIN_CENTER_CHANGE_THRESHOLD || _0x27858e > MIN_CENTER_CHANGE_THRESHOLD;
            }
            const _0x5d4ea3 = lastUpdateZoom !== _0x1e8588;
            if (!_0x5d4ea3 && !_0x234702) {
                moveEndTimeout = null;
                return;
            }
            const _0x95f5c8 = Date[_0x5bdc06(0x295)]()
              , _0x3d5f94 = _0x95f5c8 - (window['lastUpdateTime'] || 0x0);
            if (_0x3d5f94 < 0x3e8) {
                moveEndTimeout = null;
                return;
            }
            window[_0x5bdc06(0x2dd)] = _0x95f5c8,
            await updatePlaceMarkers(_0x845c34, shadeMap),
            moveEndTimeout = null,
            typeof updateEventMarkers === _0x5bdc06(0x28c) && updateEventMarkers(_0x845c34),
            lastUpdate = Date['now']();
        }
        , 0x1f4));
    }
    ),
    _0x671cba[_0xed0e25(0x1bb)](_0xed0e25(0x176), async _0x1b085d => {
        const _0x412d21 = _0xed0e25
          , _0x25e241 = parseInt(_0x1b085d[_0x412d21(0x345)][_0x412d21(0x188)])
          , _0x45ee3c = Math[_0x412d21(0x343)](_0x25e241 / 0x3c)
          , _0xd3de29 = _0x25e241 % 0x3c
          , _0x36f607 = userCurrentDate['getFullYear']()
          , _0x378b1e = userCurrentDate[_0x412d21(0x1e1)]()
          , _0x438c23 = userCurrentDate['getDate']()
          , _0x825973 = _0x18368c[_0x412d21(0x188)]
          , [_0x5940e5,_0x583e85,_0x51fcf9] = _0x825973[_0x412d21(0x27d)]('-')['map'](Number);
        userCurrentDate = new Date(_0x5940e5,_0x583e85 - 0x1,_0x51fcf9,_0x45ee3c,_0xd3de29,0x0,0x0),
        updateTimeDisplay(_0x45ee3c, _0xd3de29);
        if (shadeMap)
            shadeMap['setDate'](userCurrentDate),
            await updateAllMarkerShadows(),
            applyAllFilters();
        else {}
    }
    ),
    _0x18368c[_0xed0e25(0x1bb)](_0xed0e25(0x1fd), async _0x31e228 => {
        const _0x14af4b = _0xed0e25
          , _0x4a4cc9 = _0x31e228[_0x14af4b(0x345)][_0x14af4b(0x188)]
          , _0x1ad689 = parseInt(_0x671cba[_0x14af4b(0x188)])
          , _0x5967b2 = Math[_0x14af4b(0x343)](_0x1ad689 / 0x3c)
          , _0x19fdef = _0x1ad689 % 0x3c
          , [_0x2f8b10,_0x5709f7,_0x24403b] = _0x4a4cc9[_0x14af4b(0x27d)]('-')['map'](Number);
        userCurrentDate = new Date(_0x2f8b10,_0x5709f7 - 0x1,_0x24403b,_0x5967b2,_0x19fdef,0x0,0x0);
        if (shadeMap)
            shadeMap['setDate'](userCurrentDate),
            await updateAllMarkerShadows(),
            applyAllFilters();
        else {}
    }
    );
    if (_0x31361c)
        _0x31361c['addEventListener'](_0xed0e25(0x17d), _0x5ae95c => {
            const _0x5dd64f = _0xed0e25;
            _0x5ae95c[_0x5dd64f(0x341)]();
            if (_0x4481ff)
                _0x4481ff['classList'][_0x5dd64f(0x260)]('active');
            else {}
        }
        );
    else {}
    if (_0x4481ff && _0x1fd032 && _0x1fd032[_0xed0e25(0x309)] > 0x0)
        _0x1fd032[_0xed0e25(0x218)](_0x2daf7f => {
            _0x2daf7f['addEventListener']('click', () => {
                const _0x5c234e = a0_0x1a5b
                  , _0x3140f1 = _0x2daf7f[_0x5c234e(0x1e8)](_0x5c234e(0x16b));
                if (_0x3140f1) {
                    if (_0x3140f1 !== currentPlaceType)
                        currentPlaceType = _0x3140f1,
                        window[_0x5c234e(0x1b4)] = _0x3140f1,
                        _0x3b0bf8(currentPlaceType),
                        clearAllMarkers(),
                        lastUpdateCenter = null,
                        lastUpdateZoom = null,
                        updatePlaceMarkers(_0x845c34, shadeMap);
                    else {}
                } else {}
                if (_0x4481ff)
                    _0x4481ff[_0x5c234e(0x2e0)][_0x5c234e(0x23c)](_0x5c234e(0x283));
                else {}
            }
            );
        }
        );
    else {
        if (!_0x4481ff) {} else {
            if (!_0x1fd032 || _0x1fd032[_0xed0e25(0x309)] === 0x0) {}
        }
    }
    document[_0xed0e25(0x1bb)]('click', _0x293d0d => {
        const _0x4c5d7e = _0xed0e25
          , _0x2d0ea5 = _0x4481ff[_0x4c5d7e(0x1aa)](_0x293d0d[_0x4c5d7e(0x345)])
          , _0x263053 = _0x31361c?.[_0x4c5d7e(0x1aa)](_0x293d0d['target']);
        !_0x2d0ea5 && !_0x263053 && _0x4481ff['classList']['contains'](_0x4c5d7e(0x283)) && _0x4481ff[_0x4c5d7e(0x2e0)]['remove'](_0x4c5d7e(0x283));
    }
    ),
    _0x18368c['value'] = formatDateForInput(userCurrentDate);
    const _0xbd1242 = parseInt(_0x671cba[_0xed0e25(0x188)])
      , _0x42a217 = Math[_0xed0e25(0x343)](_0xbd1242 / 0x3c)
      , _0x41eeed = _0xbd1242 % 0x3c;
    updateTimeDisplay(_0x42a217, _0x41eeed),
    addMapMoveHandler();
    typeof initializeEvents === _0xed0e25(0x28c) && initializeEvents();
    window[_0xed0e25(0x17b)] && window[_0xed0e25(0x17b)][_0xed0e25(0x32e)]( (_0x207d4e, _0x2fdde4) => {
        setTimeout( () => {
            const _0x166dfa = a0_0x1a5b;
            window[_0x166dfa(0x17b)] && window[_0x166dfa(0x17b)][_0x166dfa(0x314)]();
        }
        , 0x64);
    }
    );
    const _0x1e2bc7 = document['getElementById'](_0xed0e25(0x2ab))
      , _0x30c692 = document[_0xed0e25(0x30d)](_0xed0e25(0x166));
    if (_0x1e2bc7 && _0x30c692)
        _0x1e2bc7[_0xed0e25(0x1bb)](_0xed0e25(0x1fd), _0x22aa7c => {
            const _0x58ec87 = _0xed0e25;
            outdoorSeatingFilterActive = _0x22aa7c[_0x58ec87(0x345)]['checked'],
            outdoorSeatingFilterActive ? _0x30c692['classList']['add'](_0x58ec87(0x283)) : _0x30c692[_0x58ec87(0x2e0)]['remove']('active'),
            applyOutdoorSeatingFilter();
        }
        );
    else {}
    initFilterControls();
}
document[a0_0x2f9057(0x1bb)](a0_0x2f9057(0x1e7), async () => {
    const _0x1390a6 = a0_0x2f9057;
    typeof initPremiumSignup === _0x1390a6(0x28c) && initPremiumSignup(),
    await initializeApp();
}
);
function updateTimeDisplay(_0x5d36ed, _0x20c191) {
    const _0x30892b = a0_0x2f9057
      , _0x4598e3 = _0x5d36ed % 0xc || 0xc
      , _0x572387 = _0x20c191[_0x30892b(0x212)]()[_0x30892b(0x174)](0x2, '0')
      , _0x13fe10 = _0x5d36ed < 0xc ? 'AM' : 'PM';
    document[_0x30892b(0x34a)]('time-display')[_0x30892b(0x18c)] = _0x4598e3 + ':' + _0x572387 + '\x20' + _0x13fe10;
}
function formatDateForInput(_0x5716ab) {
    const _0x24cf54 = a0_0x2f9057
      , _0x3f0512 = _0x5716ab[_0x24cf54(0x32c)]()
      , _0x23a5f1 = (_0x5716ab[_0x24cf54(0x1e1)]() + 0x1)[_0x24cf54(0x212)]()['padStart'](0x2, '0')
      , _0x3bf75a = _0x5716ab[_0x24cf54(0x1a2)]()['toString']()['padStart'](0x2, '0');
    return _0x3f0512 + '-' + _0x23a5f1 + '-' + _0x3bf75a;
}
async function updateAllMarkerShadows() {
    const _0x230d34 = a0_0x2f9057;
    if ((!placeLocations || placeLocations['length'] === 0x0) && (!window['premiumMarkers'] || window['premiumMarkers']['length'] === 0x0) || !shadeMap) {
        updatePlaceNotification(0x0);
        return;
    }
    await new Promise(_0x2cd25f => {
        const _0x33473c = () => {
            const _0x132f0d = a0_0x1a5b;
            !shadeMap[_0x132f0d(0x1d7)] ? _0x2cd25f() : setTimeout(_0x33473c, 0x64);
        }
        ;
        _0x33473c();
    }
    );
    typeof updatePremiumMarkerShadows === _0x230d34(0x28c) && window[_0x230d34(0x286)] && window[_0x230d34(0x286)][_0x230d34(0x309)] > 0x0 && await updatePremiumMarkerShadows();
    typeof updateEventMarkerShadows === _0x230d34(0x28c) && await updateEventMarkerShadows();
    if (!placeLocations || placeLocations[_0x230d34(0x309)] === 0x0)
        return;
    const _0x461dfb = [userCurrentDate];
    try {
        const _0x5db060 = shadeMap[_0x230d34(0x17f)]({
            'locations': placeLocations,
            'dates': _0x461dfb,
            'sunColor': [0xff, 0xff, 0xff, 0xff],
            'shadeColor': [0x0, 0x0, 0x0, 0xff]
        });
        let _0x295176 = 0x0;
        placeLocations[_0x230d34(0x218)]( (_0x984ce3, _0x250fa2) => {
            const _0x2533c2 = _0x230d34
              , _0x4157b6 = _0x5db060[_0x250fa2 * 0x4] !== 0x0
              , _0x29c671 = _0x984ce3['id'];
            _0x4157b6 && _0x295176++;
            if (placeMarkerMap[_0x2533c2(0x1b6)](_0x29c671)) {
                const _0x296466 = placeMarkerMap[_0x2533c2(0x2a3)](_0x29c671)
                  , _0x5d4dfa = _0x296466[_0x2533c2(0x255)]();
                _0x5d4dfa[_0x2533c2(0x2e0)]['remove'](_0x2533c2(0x28b), 'shadow-marker', _0x2533c2(0x19c), 'outdoor-marker');
                _0x4157b6 ? (_0x5d4dfa['innerHTML'] = '🌞',
                _0x5d4dfa[_0x2533c2(0x2e0)][_0x2533c2(0x2d6)](_0x2533c2(0x28b))) : (_0x5d4dfa[_0x2533c2(0x1b3)] = '🌚',
                _0x5d4dfa[_0x2533c2(0x2e0)][_0x2533c2(0x2d6)](_0x2533c2(0x31e)));
                _0x296466[_0x2533c2(0x25f)][_0x2533c2(0x1e5)] && _0x5d4dfa[_0x2533c2(0x2e0)][_0x2533c2(0x2d6)](_0x2533c2(0x32b));
                _0x296466[_0x2533c2(0x25f)][_0x2533c2(0x17c)] = _0x4157b6;
                const _0x3a8ddd = _0x296466[_0x2533c2(0x2fc)];
                _0x3a8ddd[_0x2533c2(0x200)]() && createStyledPopup(_0x296466['placeData'], _0x4157b6)[_0x2533c2(0x1ba)](_0x3eebd9 => {
                    const _0x2736e6 = _0x2533c2;
                    _0x3a8ddd[_0x2736e6(0x21f)](_0x3eebd9);
                }
                );
            }
        }
        ),
        outdoorSeatingFilterActive && applyOutdoorSeatingFilter();
    } catch (_0x4aee42) {}
}
function updatePlaceNotificationSmart(_0x507024, _0x23e5fc, _0x4ac9bc, _0x36f504) {
    const _0x575f93 = a0_0x2f9057
      , _0x59aa5d = document[_0x575f93(0x34a)](_0x575f93(0x1f9));
    if (_0x59aa5d) {
        _0x59aa5d[_0x575f93(0x2e0)][_0x575f93(0x23c)](_0x575f93(0x28e), _0x575f93(0x2ce), _0x575f93(0x211));
        let _0x48867a;
        const _0x29259f = window[_0x575f93(0x263)] || null;
        if (_0x29259f)
            _0x48867a = _0x29259f[_0x575f93(0x307)]();
        else {
            if (currentPlaceType === _0x575f93(0x1c2))
                _0x48867a = _0x507024 === 0x1 ? _0x575f93(0x1c2) : 'cafes';
            else {
                if (currentPlaceType === _0x575f93(0x2ea))
                    _0x48867a = _0x507024 === 0x1 ? _0x575f93(0x2ea) : _0x575f93(0x267);
                else
                    currentPlaceType === _0x575f93(0x318) && (_0x48867a = _0x507024 === 0x1 ? _0x575f93(0x318) : 'restaurants');
            }
        }
        let _0x10ee3f = ''
          , _0x3fdb92 = '';
        if (_0x507024 > 0x0) {
            let _0x528381 = '';
            if (_0x4ac9bc && _0x36f504['length'] > 0x0) {
                const _0x3235f6 = _0x36f504[_0x575f93(0x33b)](',\x20');
                _0x528381 = _0x575f93(0x2ae) + _0x3235f6;
            } else {
                if (_0x4ac9bc)
                    _0x528381 = _0x575f93(0x28e);
                else {
                    if (_0x36f504[_0x575f93(0x309)] > 0x0) {
                        const _0x12cdcf = _0x36f504[_0x575f93(0x33b)](',\x20');
                        _0x528381 = _0x12cdcf;
                    } else
                        _0x23e5fc > 0x0 ? (_0x528381 = _0x575f93(0x28e),
                        _0x10ee3f = _0x575f93(0x336) + (_0x23e5fc === 0x1 ? 'is' : _0x575f93(0x208)) + '\x20' + _0x23e5fc + _0x575f93(0x24f) + _0x48867a + _0x575f93(0x30e)) : _0x10ee3f = _0x575f93(0x254) + _0x507024 + '\x20' + _0x48867a + _0x575f93(0x2fa);
                }
            }
            !_0x10ee3f && (_0x10ee3f = _0x575f93(0x336) + (_0x507024 === 0x1 ? 'is' : _0x575f93(0x208)) + '\x20' + _0x507024 + '\x20' + _0x528381 + '\x20' + _0x48867a + _0x575f93(0x30e)),
            _0x3fdb92 = 'sunny';
        } else {
            let _0x443093 = '';
            if (_0x4ac9bc && _0x36f504[_0x575f93(0x309)] > 0x0) {
                const _0x4f4a05 = _0x36f504[_0x575f93(0x33b)](',\x20');
                _0x443093 = _0x575f93(0x2ae) + _0x4f4a05;
            } else {
                if (_0x4ac9bc)
                    _0x443093 = 'sunny';
                else {
                    if (_0x36f504['length'] > 0x0) {
                        const _0x44a942 = _0x36f504[_0x575f93(0x33b)](',\x20');
                        _0x443093 = _0x44a942;
                    } else
                        _0x443093 = _0x575f93(0x28e);
                }
            }
            _0x10ee3f = _0x575f93(0x24c) + _0x443093 + '\x20' + _0x48867a + '\x20around!\x20🌚',
            _0x3fdb92 = _0x575f93(0x2ce);
        }
        _0x59aa5d[_0x575f93(0x18c)] = _0x10ee3f,
        _0x59aa5d[_0x575f93(0x2e0)][_0x575f93(0x2d6)](_0x3fdb92),
        _0x59aa5d[_0x575f93(0x288)][_0x575f93(0x18e)] = _0x575f93(0x1a0);
    }
}
function updatePlaceNotification(_0x377a36) {
    updatePlaceNotificationSmart(_0x377a36, _0x377a36, ![], []);
}
function a0_0x1a5b(_0x5e38a8, _0xd2e7b) {
    const _0x39c9d2 = a0_0x39c9();
    return a0_0x1a5b = function(_0x1a5b45, _0x8b1b68) {
        _0x1a5b45 = _0x1a5b45 - 0x164;
        let _0x3dac8f = _0x39c9d2[_0x1a5b45];
        return _0x3dac8f;
    }
    ,
    a0_0x1a5b(_0x5e38a8, _0xd2e7b);
}
function clearAllMarkers() {
    const _0x57dcf1 = a0_0x2f9057;
    for (const _0x2a9a50 of placeMarkerMap['values']()) {
        _0x2a9a50[_0x57dcf1(0x23c)]();
    }
    placeMarkerMap[_0x57dcf1(0x269)](),
    currentlyVisiblePlaces['clear'](),
    placeLocations = [],
    updatePlaceNotification(0x0);
    if (typeof clearPremiumMarkersByType === _0x57dcf1(0x28c))
        clearPremiumMarkersByType(currentPlaceType);
    else
        typeof clearPremiumMarkers === _0x57dcf1(0x28c) && clearPremiumMarkers();
}
function addMapMoveHandler() {
    const _0x31c18e = a0_0x2f9057;
    if (!map)
        return;
    let _0x59dfe3 = ![]
      , _0x317992 = ![]
      , _0x32dace = 0x0;
    const _0x2f7295 = 0x1f4;
    let _0x478a6e = null;
    map['on'](_0x31c18e(0x1f7), function() {
        _0x59dfe3 = !![];
    }),
    map['on'](_0x31c18e(0x207), function() {
        const _0x2d81ee = _0x31c18e;
        _0x59dfe3 = ![],
        _0x478a6e = map[_0x2d81ee(0x1a8)](),
        !_0x317992 && Date['now']() - _0x32dace > _0x2f7295 && (_0x317992 = !![],
        setTimeout( () => {
            const _0x34eba2 = _0x2d81ee;
            if (!_0x59dfe3) {
                const _0x5a251b = map[_0x34eba2(0x1a8)]();
                (isNaN(_0x5a251b[_0x34eba2(0x308)]) || isNaN(_0x5a251b[_0x34eba2(0x261)])) && (_0x478a6e && map[_0x34eba2(0x1a3)](_0x478a6e)),
                updatePlaceMarkers(),
                typeof updateEventMarkers === _0x34eba2(0x28c) && updateEventMarkers(map),
                _0x32dace = Date[_0x34eba2(0x295)]();
            }
            _0x317992 = ![];
        }
        , 0x64));
    }),
    map['on'](_0x31c18e(0x1e3), function() {
        const _0x30d14f = _0x31c18e;
        _0x478a6e = map[_0x30d14f(0x1a8)](),
        !_0x317992 && Date[_0x30d14f(0x295)]() - _0x32dace > _0x2f7295 && (_0x317992 = !![],
        setTimeout( () => {
            const _0x3ce9a4 = _0x30d14f;
            !_0x59dfe3 && (updatePlaceMarkers(),
            typeof updateEventMarkers === _0x3ce9a4(0x28c) && updateEventMarkers(map),
            _0x32dace = Date['now']()),
            _0x317992 = ![];
        }
        , 0x64));
    });
}
window[a0_0x2f9057(0x22d)] = function() {
    const _0x1b700e = a0_0x2f9057;
    window[_0x1b700e(0x20d)] = !![],
    markerSelectionMode = !![],
    map[_0x1b700e(0x2d4)]()['style'][_0x1b700e(0x1d4)] = _0x1b700e(0x202);
    const _0x4cd7cc = document['getElementById'](_0x1b700e(0x1f9));
    _0x4cd7cc && (_0x4cd7cc[_0x1b700e(0x18c)] = 'Click\x20on\x20your\x20business\x20to\x20select\x20it',
    _0x4cd7cc['className'] = _0x1b700e(0x32f),
    _0x4cd7cc[_0x1b700e(0x288)][_0x1b700e(0x18e)] = 'block');
}
,
window[a0_0x2f9057(0x284)] = function() {
    const _0x3d4db1 = a0_0x2f9057;
    window[_0x3d4db1(0x20d)] = ![],
    markerSelectionMode = ![],
    map[_0x3d4db1(0x2d4)]()['style'][_0x3d4db1(0x1d4)] = '';
    const _0x26b167 = document['getElementById']('cafe-notification');
    _0x26b167 && (_0x26b167[_0x3d4db1(0x288)][_0x3d4db1(0x18e)] = _0x3d4db1(0x2ce));
}
,
window[a0_0x2f9057(0x303)] = function() {
    const _0x4fd7a0 = a0_0x2f9057;
    window['markerSelectionMode'] = !![],
    mapLocationSelectionMode = !![],
    map[_0x4fd7a0(0x2d4)]()[_0x4fd7a0(0x288)][_0x4fd7a0(0x1d4)] = _0x4fd7a0(0x258);
    const _0x2d96a6 = document[_0x4fd7a0(0x34a)](_0x4fd7a0(0x1f9));
    _0x2d96a6 && (_0x2d96a6[_0x4fd7a0(0x18c)] = 'Click\x20on\x20the\x20map\x20to\x20place\x20your\x20business\x20location',
    _0x2d96a6[_0x4fd7a0(0x1c9)] = _0x4fd7a0(0x32f),
    _0x2d96a6[_0x4fd7a0(0x288)]['display'] = _0x4fd7a0(0x1a0));
}
,
window[a0_0x2f9057(0x1b9)] = function() {
    const _0x19eb9a = a0_0x2f9057;
    window['markerSelectionMode'] = ![],
    mapLocationSelectionMode = ![],
    map[_0x19eb9a(0x2d4)]()[_0x19eb9a(0x288)]['cursor'] = '';
    const _0x17a0c1 = document[_0x19eb9a(0x34a)](_0x19eb9a(0x1f9));
    _0x17a0c1 && (_0x17a0c1['style'][_0x19eb9a(0x18e)] = _0x19eb9a(0x2ce)),
    tempSelectionMarker && (tempSelectionMarker[_0x19eb9a(0x23c)](),
    tempSelectionMarker = null);
}
;
function handleMapClick(_0x1d6abb) {
    const _0x3b1e99 = a0_0x2f9057;
    if (!mapLocationSelectionMode && !window[_0x3b1e99(0x20d)])
        return;
    const _0x33287f = _0x1d6abb['lngLat'];
    tempSelectionMarker && tempSelectionMarker[_0x3b1e99(0x23c)]();
    const _0x5a19fc = document[_0x3b1e99(0x2f6)](_0x3b1e99(0x1c1));
    _0x5a19fc[_0x3b1e99(0x1c9)] = _0x3b1e99(0x221),
    _0x5a19fc[_0x3b1e99(0x288)][_0x3b1e99(0x197)] = _0x3b1e99(0x1ea),
    _0x5a19fc[_0x3b1e99(0x288)][_0x3b1e99(0x270)] = '2px\x20solid\x20white',
    _0x5a19fc[_0x3b1e99(0x288)]['width'] = '32px',
    _0x5a19fc['style']['height'] = _0x3b1e99(0x29e),
    _0x5a19fc['style'][_0x3b1e99(0x1f6)] = _0x3b1e99(0x253),
    _0x5a19fc[_0x3b1e99(0x288)][_0x3b1e99(0x1d4)] = _0x3b1e99(0x202),
    _0x5a19fc[_0x3b1e99(0x288)][_0x3b1e99(0x1b7)] = '0\x203px\x208px\x20rgba(0,0,0,0.3)',
    _0x5a19fc[_0x3b1e99(0x288)][_0x3b1e99(0x2cc)] = _0x3b1e99(0x25a),
    tempSelectionMarker = new mapboxgl[(_0x3b1e99(0x210))]({
        'element': _0x5a19fc,
        'anchor': _0x3b1e99(0x1d5)
    })[_0x3b1e99(0x300)](_0x33287f)['addTo'](map);
    if (typeof window[_0x3b1e99(0x24d)] === _0x3b1e99(0x28c))
        window[_0x3b1e99(0x24d)](_0x33287f);
    else
        try {
            const _0x2fa6f8 = new CustomEvent(_0x3b1e99(0x1e0),{
                'detail': {
                    'coordinates': _0x33287f
                }
            });
            window[_0x3b1e99(0x181)](_0x2fa6f8);
        } catch (_0x131db1) {}
}
function applyOutdoorSeatingFilter() {
    const _0xa6516a = a0_0x2f9057;
    placeMarkerMap[_0xa6516a(0x218)]( (_0x439ee9, _0x2e74e7) => {
        const _0x1d5248 = _0xa6516a
          , _0x14cbdb = _0x439ee9['placeData'];
        if (!_0x14cbdb)
            return;
        outdoorSeatingFilterActive && !_0x14cbdb['hasOutdoorSeating'] ? _0x439ee9[_0x1d5248(0x255)]()['style'][_0x1d5248(0x18e)] = 'none' : _0x439ee9[_0x1d5248(0x255)]()[_0x1d5248(0x288)][_0x1d5248(0x18e)] = '';
    }
    );
    premiumMarkers && premiumMarkers[_0xa6516a(0x309)] > 0x0 && premiumMarkers['forEach'](_0x368086 => {
        const _0x17bf9d = _0xa6516a;
        _0x368086 && _0x368086[_0x17bf9d(0x25f)] && (outdoorSeatingFilterActive && !_0x368086[_0x17bf9d(0x25f)][_0x17bf9d(0x1e5)] ? _0x368086[_0x17bf9d(0x255)]()[_0x17bf9d(0x288)][_0x17bf9d(0x18e)] = _0x17bf9d(0x2ce) : _0x368086[_0x17bf9d(0x255)]()['style'][_0x17bf9d(0x18e)] = '');
    }
    );
    let _0x560dd1 = 0x0
      , _0x402fa2 = 0x0;
    placeMarkerMap[_0xa6516a(0x218)](_0x57514e => {
        const _0x43754d = _0xa6516a;
        _0x57514e[_0x43754d(0x255)]()[_0x43754d(0x288)][_0x43754d(0x18e)] !== _0x43754d(0x2ce) && (_0x560dd1++,
        _0x57514e[_0x43754d(0x25f)][_0x43754d(0x17c)] && _0x402fa2++);
    }
    );
    window[_0xa6516a(0x286)] && window[_0xa6516a(0x286)][_0xa6516a(0x309)] > 0x0 && window[_0xa6516a(0x286)][_0xa6516a(0x218)](_0x52ae85 => {
        const _0x2c05ff = _0xa6516a;
        if (_0x52ae85 && _0x52ae85[_0x2c05ff(0x255)] && _0x52ae85[_0x2c05ff(0x255)]() && _0x52ae85[_0x2c05ff(0x255)]()['style'][_0x2c05ff(0x18e)] !== 'none' && _0x52ae85['getElement']()['parentNode']) {
            const _0x3768cd = _0x52ae85[_0x2c05ff(0x25f)]?.[_0x2c05ff(0x289)] || _0x52ae85['placeData']?.['id'];
            let _0x3bf51a = ![];
            _0x3768cd && placeMarkerMap[_0x2c05ff(0x218)](_0x57625b => {
                const _0x314eb0 = _0x2c05ff;
                (_0x57625b[_0x314eb0(0x25f)]?.['osm_id'] === _0x3768cd || _0x57625b[_0x314eb0(0x25f)]?.['id'] === _0x3768cd) && (_0x3bf51a = !![]);
            }
            ),
            !_0x3bf51a && (_0x560dd1++,
            _0x52ae85[_0x2c05ff(0x25f)] && _0x52ae85[_0x2c05ff(0x25f)][_0x2c05ff(0x17c)] && _0x402fa2++);
        }
    }
    );
    const _0x4d29b4 = document[_0xa6516a(0x34a)](_0xa6516a(0x2e8))
      , _0x4dd2a8 = _0x4d29b4 && _0x4d29b4[_0xa6516a(0x194)];
    updatePlaceNotificationSmart(_0x560dd1, _0x402fa2, _0x4dd2a8, selectedTags);
}
function applyAllFilters() {
    const _0x487fa4 = a0_0x2f9057;
    let _0x3927d4 = [];
    placeMarkerMap[_0x487fa4(0x218)](_0x5e9318 => {
        _0x3927d4['push'](_0x5e9318);
    }
    );
    window[_0x487fa4(0x286)] && window['premiumMarkers'][_0x487fa4(0x309)] > 0x0 && window[_0x487fa4(0x286)][_0x487fa4(0x218)](_0x5e2356 => {
        const _0x382f3d = _0x487fa4
          , _0x532382 = _0x5e2356[_0x382f3d(0x25f)]?.['osm_id'] || _0x5e2356[_0x382f3d(0x25f)]?.['id'];
        let _0x534a72 = ![];
        _0x532382 && placeMarkerMap[_0x382f3d(0x218)](_0x4be866 => {
            const _0x6c427 = _0x382f3d;
            (_0x4be866['placeData']?.[_0x6c427(0x289)] === _0x532382 || _0x4be866[_0x6c427(0x25f)]?.['id'] === _0x532382) && (_0x534a72 = !![]);
        }
        ),
        !_0x534a72 && _0x3927d4[_0x382f3d(0x1ec)](_0x5e2356);
    }
    );
    let _0x311ed6 = 0x0
      , _0x17e821 = 0x0;
    _0x3927d4[_0x487fa4(0x218)](_0x24f3b3 => {
        const _0x20ce3c = _0x487fa4;
        if (!_0x24f3b3 || !_0x24f3b3['placeData'])
            return;
        const _0xef509 = _0x24f3b3[_0x20ce3c(0x25f)];
        let _0x1d44f2 = !![];
        premiumFilterActive && !_0x24f3b3[_0x20ce3c(0x1ee)] && (_0x1d44f2 = ![]);
        if (_0x1d44f2 && selectedTags['length'] > 0x0) {
            const _0x5c2a9f = _0xef509[_0x20ce3c(0x1dd)] || [];
            _0xef509['hasOutdoorSeating'] && !_0x5c2a9f[_0x20ce3c(0x312)]('outdoor\x20seating') && _0x5c2a9f['push'](_0x20ce3c(0x348)),
            _0x1d44f2 = selectedTags['some'](_0x3d934f => _0x5c2a9f['includes'](_0x3d934f));
        }
        _0x1d44f2 ? (_0x24f3b3[_0x20ce3c(0x255)]()[_0x20ce3c(0x288)][_0x20ce3c(0x18e)] = '',
        _0x311ed6++,
        _0x24f3b3[_0x20ce3c(0x25f)][_0x20ce3c(0x17c)] && _0x17e821++) : _0x24f3b3['getElement']()['style'][_0x20ce3c(0x18e)] = 'none';
    }
    ),
    updatePlaceNotificationSmart(_0x311ed6, _0x17e821, premiumFilterActive, selectedTags);
}
function togglePremiumFilter(_0x1d85e0) {
    const _0xa339f1 = a0_0x2f9057;
    premiumFilterActive = _0x1d85e0;
    const _0x78c199 = document[_0xa339f1(0x30d)]('.filter-toggle-label');
    _0x78c199 && (_0x1d85e0 ? _0x78c199[_0xa339f1(0x2e0)]['add'](_0xa339f1(0x283)) : _0x78c199['classList'][_0xa339f1(0x23c)](_0xa339f1(0x283)));
    const _0x170718 = generateShareableURL(selectedTags, _0x1d85e0);
    _0x170718 !== window['location'][_0xa339f1(0x301)] && window[_0xa339f1(0x21c)][_0xa339f1(0x21d)]({}, '', _0x170718),
    applyAllFilters();
}
function updateSelectedTags(_0x308606) {
    const _0x3c9a3d = a0_0x2f9057;
    selectedTags = _0x308606;
    const _0x275887 = document[_0x3c9a3d(0x30d)](_0x3c9a3d(0x2e6))
      , _0x1d8133 = document[_0x3c9a3d(0x34a)]('tags-dropdown-btn');
    _0x275887 && (_0x275887[_0x3c9a3d(0x18c)] = selectedTags[_0x3c9a3d(0x309)] + _0x3c9a3d(0x2df));
    _0x1d8133 && (selectedTags[_0x3c9a3d(0x309)] > 0x0 ? (_0x1d8133['classList']['add'](_0x3c9a3d(0x283)),
    _0x1d8133[_0x3c9a3d(0x18c)] = 'Tags\x20(' + selectedTags[_0x3c9a3d(0x309)] + ')\x20🏷️') : (_0x1d8133[_0x3c9a3d(0x2e0)][_0x3c9a3d(0x23c)](_0x3c9a3d(0x283)),
    _0x1d8133['textContent'] = _0x3c9a3d(0x2bf)));
    const _0x2b3e61 = document[_0x3c9a3d(0x34a)](_0x3c9a3d(0x20c));
    _0x2b3e61 && currentPlaceType === _0x3c9a3d(0x2ea) && (selectedTags['includes'](_0x3c9a3d(0x2f9)) ? _0x2b3e61[_0x3c9a3d(0x18c)] = '🍹' : window['BRAND_EMOJI'] && window['ACTIVE_BRAND'] ? _0x2b3e61['textContent'] = window[_0x3c9a3d(0x209)] : _0x2b3e61[_0x3c9a3d(0x18c)] = '🍺');
    const _0x30a9cb = generateShareableURL(_0x308606, premiumFilterActive);
    _0x30a9cb !== window[_0x3c9a3d(0x1ff)][_0x3c9a3d(0x301)] && window[_0x3c9a3d(0x21c)][_0x3c9a3d(0x21d)]({}, '', _0x30a9cb),
    applyAllFilters();
}
function initFilterControls() {
    const _0x25aea0 = a0_0x2f9057
      , _0x5126a2 = document[_0x25aea0(0x34a)]('premium-filter');
    if (_0x5126a2) {
        _0x5126a2[_0x25aea0(0x194)] = premiumFilterActive;
        const _0x542c28 = document[_0x25aea0(0x30d)]('.filter-toggle-label');
        _0x542c28 && premiumFilterActive && _0x542c28[_0x25aea0(0x2e0)]['add']('active'),
        _0x5126a2[_0x25aea0(0x1bb)](_0x25aea0(0x1fd), _0x574703 => {
            const _0x52f178 = _0x25aea0;
            togglePremiumFilter(_0x574703[_0x52f178(0x345)][_0x52f178(0x194)]);
        }
        );
    }
    const _0x1572e2 = document[_0x25aea0(0x34a)](_0x25aea0(0x322))
      , _0x593ef1 = document[_0x25aea0(0x34a)](_0x25aea0(0x16c));
    _0x1572e2 && _0x593ef1 && (_0x1572e2['addEventListener'](_0x25aea0(0x17d), _0x2e3573 => {
        const _0x57320a = _0x25aea0;
        _0x2e3573[_0x57320a(0x341)]();
        const _0x1d1960 = _0x1572e2[_0x57320a(0x2b4)]();
        _0x593ef1['style'][_0x57320a(0x1a1)] = _0x1d1960['bottom'] + 0x5 + 'px',
        _0x593ef1[_0x57320a(0x288)][_0x57320a(0x1f8)] = Math[_0x57320a(0x2cf)](0xa, _0x1d1960[_0x57320a(0x2d0)] - 0xfa) + 'px',
        _0x593ef1[_0x57320a(0x288)][_0x57320a(0x2f3)] = _0x57320a(0x2b8),
        _0x593ef1[_0x57320a(0x288)][_0x57320a(0x340)] = 'fixed';
        const _0x141fd5 = document[_0x57320a(0x30d)](_0x57320a(0x281));
        if (_0x141fd5) {
            const _0x4c82f5 = window[_0x57320a(0x1a5)](_0x141fd5);
        }
        const _0x19ad86 = _0x593ef1[_0x57320a(0x2e0)]['contains'](_0x57320a(0x1df));
        _0x19ad86 ? (_0x593ef1[_0x57320a(0x2e0)][_0x57320a(0x23c)](_0x57320a(0x1df)),
        _0x593ef1[_0x57320a(0x288)][_0x57320a(0x18e)] = _0x57320a(0x2ce)) : (_0x593ef1[_0x57320a(0x2e0)][_0x57320a(0x2d6)](_0x57320a(0x1df)),
        _0x593ef1['style'][_0x57320a(0x18e)] = _0x57320a(0x25b));
    }
    ),
    document[_0x25aea0(0x1bb)](_0x25aea0(0x17d), _0x1ca02d => {
        const _0x5c4519 = _0x25aea0;
        !_0x1572e2['contains'](_0x1ca02d[_0x5c4519(0x345)]) && !_0x593ef1[_0x5c4519(0x1aa)](_0x1ca02d[_0x5c4519(0x345)]) && (_0x593ef1[_0x5c4519(0x2e0)]['remove'](_0x5c4519(0x1df)),
        _0x593ef1[_0x5c4519(0x288)][_0x5c4519(0x18e)] = _0x5c4519(0x2ce));
    }
    ));
    const _0x2378e4 = document['getElementById'](_0x25aea0(0x2d2))
      , _0x3eb9e3 = document[_0x25aea0(0x240)](_0x25aea0(0x22b));
    _0x2378e4 && _0x2378e4['addEventListener']('input', _0x11be0a => {
        const _0x2bd2c5 = _0x25aea0
          , _0x817dfa = _0x11be0a[_0x2bd2c5(0x345)][_0x2bd2c5(0x188)][_0x2bd2c5(0x307)]();
        document['querySelectorAll'](_0x2bd2c5(0x1d2))['forEach'](_0x8cecb2 => {
            const _0x3d178a = _0x2bd2c5
              , _0x3f0d58 = _0x8cecb2['textContent'][_0x3d178a(0x307)]();
            _0x3f0d58[_0x3d178a(0x312)](_0x817dfa) ? _0x8cecb2[_0x3d178a(0x288)][_0x3d178a(0x18e)] = '' : _0x8cecb2[_0x3d178a(0x288)]['display'] = 'none';
        }
        );
    }
    );
    if (_0x3eb9e3['length'] > 0x0) {
        _0x3eb9e3['forEach'](_0x2a704a => {
            const _0x1c8a95 = _0x25aea0;
            window[_0x1c8a95(0x196)] && _0x2a704a[_0x1c8a95(0x188)] === window[_0x1c8a95(0x196)] && (_0x2a704a[_0x1c8a95(0x194)] = !![]),
            selectedTags[_0x1c8a95(0x312)](_0x2a704a[_0x1c8a95(0x188)]) && (_0x2a704a[_0x1c8a95(0x194)] = !![]),
            _0x2a704a[_0x1c8a95(0x1bb)](_0x1c8a95(0x1fd), () => {
                const _0x26c948 = _0x1c8a95
                  , _0x35fdb8 = Array['from'](document[_0x26c948(0x240)]('.tag-checkbox:checked'))[_0x26c948(0x2c6)](_0x4db11d => _0x4db11d[_0x26c948(0x188)]);
                updateSelectedTags(_0x35fdb8);
            }
            );
        }
        );
        if (window[_0x25aea0(0x196)] || urlTags[_0x25aea0(0x309)] > 0x0) {
            const _0x2a1a5c = Array[_0x25aea0(0x293)](document[_0x25aea0(0x240)](_0x25aea0(0x1ad)))[_0x25aea0(0x2c6)](_0x490f24 => _0x490f24[_0x25aea0(0x188)]);
            updateSelectedTags(_0x2a1a5c);
        }
    }
    const _0x3bb74d = document[_0x25aea0(0x34a)]('clear-tags-btn');
    _0x3bb74d && _0x3bb74d[_0x25aea0(0x1bb)](_0x25aea0(0x17d), () => {
        const _0x15b628 = _0x25aea0;
        document[_0x15b628(0x240)](_0x15b628(0x22b))[_0x15b628(0x218)](_0x4e7ddb => {
            const _0x5d82f7 = _0x15b628;
            _0x4e7ddb[_0x5d82f7(0x194)] = ![];
        }
        ),
        updateSelectedTags([]);
    }
    );
}
