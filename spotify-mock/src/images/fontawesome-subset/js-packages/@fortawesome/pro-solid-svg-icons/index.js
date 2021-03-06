(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['pro-solid-svg-icons'] = {})));
}(this, (function (exports) { 'use strict';

  var prefix = "fas";
  var faAlbumCollection = {
    prefix: 'fas',
    iconName: 'album-collection',
    icon: [512, 512, [], "f8a0", "M496 104a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v24h480zm-16-80a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v24h448zM256 325.65c-16.63 0-30 9.93-29.86 22.09s13.5 21.72 29.86 21.72 29.73-9.68 29.87-21.72-13.23-22.09-29.87-22.09zM480 160H32A32 32 0 0 0 .13 194.9l26.19 288A32 32 0 0 0 58.18 512h395.64a32 32 0 0 0 31.86-29.1l26.19-288A32 32 0 0 0 480 160zM256 472.89c-94.26 0-174.39-54.53-179.21-125.15C71.71 273.1 151.82 209.4 256 209.4s184.29 63.7 179.21 138.34c-4.82 70.63-84.95 125.15-179.21 125.15z"]
  };
  var faHeart = {
    prefix: 'fas',
    iconName: 'heart',
    icon: [512, 512, [], "f004", "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"]
  };
  var faHomeAlt = {
    prefix: 'fas',
    iconName: 'home-alt',
    icon: [576, 512, [], "f80a", "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]
  };
  var faSearch = {
    prefix: 'fas',
    iconName: 'search',
    icon: [512, 512, [], "f002", "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]
  };
  var _iconsCache = {
    faAlbumCollection: faAlbumCollection,
    faHeart: faHeart,
    faHomeAlt: faHomeAlt,
    faSearch: faSearch
  };

  exports.fas = _iconsCache;
  exports.prefix = prefix;
  exports.faAlbumCollection = faAlbumCollection;
  exports.faHeart = faHeart;
  exports.faHomeAlt = faHomeAlt;
  exports.faSearch = faSearch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
