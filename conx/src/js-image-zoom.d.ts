declare function _exports(container: any, opts: any): {
  setup: () => void;
  kill: () => void;
  _getInstanceInfo: () => {
      setup: () => {
          sourceImg: {
              element: any;
              width: number;
              height: number;
              naturalWidth: number;
              naturalHeight: number;
          };
          zoomedImgOffset: {
              vertical: number;
              horizontal: number;
          };
          zoomedImg: {
              element: any;
              width: number;
              height: number;
          };
          zoomLens: {
              element: any;
              width: number;
              height: number;
          };
      };
      kill: () => {
          sourceImg: {
              element: any;
              width: number;
              height: number;
              naturalWidth: number;
              naturalHeight: number;
          };
          zoomedImgOffset: {
              vertical: number;
              horizontal: number;
          };
          zoomedImg: {
              element: any;
              width: number;
              height: number;
          };
          zoomLens: {
              element: any;
              width: number;
              height: number;
          };
      };
      onSourceImgLoad: () => void;
      data: {
          sourceImg: {
              element: any;
              width: number;
              height: number;
              naturalWidth: number;
              naturalHeight: number;
          };
          zoomedImgOffset: {
              vertical: number;
              horizontal: number;
          };
          zoomedImg: {
              element: any;
              width: number;
              height: number;
          };
          zoomLens: {
              element: any;
              width: number;
              height: number;
          };
      };
      options: any;
  };
};
export = _exports;