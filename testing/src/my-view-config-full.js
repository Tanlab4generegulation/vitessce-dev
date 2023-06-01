export const myViewConfig = {
  "name": "Test CODEX data",
  "description": "Small section of R1 region 1",
  "version": "1.0.15",
  "initStrategy": "auto",
  "datasets": [
    {
      "uid": "smithd30",
      "name": "smithd30",
      "files": [
        {
          "fileType": "obsSegmentations.json",
          "url": "https://cscb.research.chop.edu/share_data/test_segmentations.json",
          "coordinationValues": {
            "obsType": "cell"
          }
        },
        {
          "fileType": "obsLocations.csv",
          "url": "https://cscb.research.chop.edu/share_data/test_cells.csv",
          "options": {
            "obsIndex": "cell_id",
            "obsLocations": ["Absolute.X", "Absolute.Y"]
          },
          "coordinationValues": {
            "obsType": "cell"
          }
        },
        {
          "fileType": "obsEmbedding.csv",
          "url": "https://cscb.research.chop.edu/share_data/test_cells.csv",
          "options": {
            "obsIndex": "cell_id",
            "obsEmbedding": ["UMAP_1", "UMAP_2"]
          },
          "coordinationValues": {
            "obsType": "cell",
            "embeddingType": "UMAP"
          }
        },
        {
          "fileType": "obsSets.csv",
          "url": "https://cscb.research.chop.edu/share_data/test_cells.csv",
          "options": {
            "obsIndex": "cell_id",
            "obsSets": [
              {
                "name": "Cell Type",
                "column": ["new_pheno", "motif"]
              }
            ]
          },
          "coordinationValues": {
            "obsType": "cell"
          }
        },
        {
          "fileType": "obsFeatureMatrix.csv",
          "url": "https://cscb.research.chop.edu/share_data/test_matrix.csv",
          "coordinationValues": {
            "obsType": "cell",
            "featureType": "gene",
            "featureValueType": "expression"
          }
        },
        {
          "fileType": "image.ome-zarr",
          "url": "https://cscb.research.chop.edu/share_data/codex_img.ome.zarr"
        }
      ]
    }
  ],
  "coordinationSpace": {
    "embeddingZoom": {
      "UMAP": 0
    },
    "embeddingType": {
      "UMAP": "UMAP"
    },
    "spatialZoom": {
      "A": -5.5
    },
    // "spatialTargetX": {
    //   "A": 16000
    // },
    // "spatialTargetY": {
    //   "A": 20000
    // },
    "spatialImageLayer": {
      "A": [
        {
          "type": "raster",
          "index": 0,
          "visible": true,
          "colormap": null,
          "opacity": 1,
          "domainType": "Min/Max",
          "transparentColor": null,
          "renderingMode": "Additive",
          "use3d": false,
          "channels": [
            {
              "selection": {
                "c": 1
              },
              "color": [
                0,
                0,
                255
              ],
              "visible": true,
              "slider": [
                1,
                1473
              ]
            },
            {
              "selection": {
                "c": 0
              },
              "color": [
                0,
                255,
                0
              ],
              "visible": true,
              "slider": [
                1,
                447
              ]
            },
            {
              "selection": {
                "c": 3
              },
              "color": [
                255,
                0,
                0
              ],
              "visible": true,
              "slider": [
                1,
                666
              ]
            }
          ]
        }
      ]
    },
    "spatialSegmentationLayer": {
      "A": {
        "opacity": 1, "radius": 0, "visible": true, "stroked": false
      }
    },
    "spatialPointLayer": {
      "A": {
        "opacity": 1, "radius": 20, "visible": true
      }
    }
  },
  "layout": [
    {
      "component": "description",
      "x": 0,
      "y": 0,
      "w": 2,
      "h": 1
    },
    {
      "component": "layerController",
      "coordinationScopes": {
        "spatialImageLayer": "A",
        "spatialSegmentationLayer": "A",
        "spatialPointLayer": "A"
      },
      "x": 0,
      "y": 1,
      "w": 2,
      "h": 4
    },
    {
      "component": "status",
      "x": 0,
      "y": 5,
      "w": 2,
      "h": 1
    },
    {
      "component": "spatial",
      "coordinationScopes": {
        "spatialZoom": "A",
        "spatialTargetX": "A",
        "spatialTargetY": "A",
        "spatialImageLayer": "A",
        "spatialSegmentationLayer": "A",
        "spatialPointLayer": "A"
      },
      "x": 2,
      "y": 0,
      "w": 4,
      "h": 4
    },
    {
      "component": "featureList",
      "x": 9,
      "y": 0,
      "w": 3,
      "h": 2
    },
    {
      "component": "obsSets",
      "x": 9,
      "y": 3,
      "w": 3,
      "h": 2
    },
    {
      "component": "heatmap",
      "props": {
        "transpose": true
      },
      "x": 2,
      "y": 4,
      "w": 5,
      "h": 2
    },
    {
      "component": "obsSetFeatureValueDistribution",
      "x": 7,
      "y": 4,
      "w": 5,
      "h": 2
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "embeddingType": "UMAP",
        "embeddingZoom": "UMAP"
      },
      "x": 6,
      "y": 0,
      "w": 3,
      "h": 4
    }
  ]
};
