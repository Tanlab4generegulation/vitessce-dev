export const myViewConfig = {
    "version": "1.0.15", 
    "name": "CODEX", 
    "description": "Testing small slice of CODEX image", 
    "datasets": [
        {
            "uid": "A", 
            "name": "H10", 
            "files": [
                {
                    "fileType": "anndata.zarr", 
                    "url": "https://cscb.research.chop.edu/vitessce/data/H10_adata.zarr/", 
                    "options": {
                        "obsEmbedding": [
                            {
                                "path": "obsm/X_UMAP_dim30", 
                                "dims": [0, 1], 
                                "embeddingType": "UMAP"
                            }, 
                            {
                                "path": "obsm/centroids", 
                                "dims": [0, 1], 
                                "embeddingType": "centroids"
                            }
                        ], 
                        "obsSets": [
                            {
                                "name": "phenotype", 
                                "path": "obs/cluster_anno_l2"
                            }, 
                            {"name": "motif", 
                            "path": "obs/neighborhood10"
                            }
                        ], 
                        "obsFeatureMatrix": {"path": "X"}
                    }
                },
                {
                    "fileType": "obsSegmentations.json",
                    "url": "https://cscb.research.chop.edu/vitessce/data/segmentations.json",
                    "coordinationValues": {
                      "obsType": "cell"
                    }
                },
                {
                    "fileType": "image.ome-zarr",
                    "url": "https://cscb.research.chop.edu/vitessce/data/H10_ngff_image.zarr"
                }
            ]
        }
    ], 
    "coordinationSpace": {
        "dataset": {"A": "A"}, 
        "embeddingType": {"A": "UMAP"},
        "spatialImageLayer": {
            "A": [
              {
                "type": "raster",
                "index": 0,
                "visible": true,
                "colormap": null,
                "opacity": 1,
                "transparentColor": null,
                "use3d": false,
                "channels": [
                  {
                    "selection": {
                      "c": 0
                    },
                    "color": [
                      0,
                      0,
                      255
                    ],
                    "visible": true,
                    "slider": [
                      1,
                      200
                    ]
                  },
                  {
                    "selection": {
                      "c": 9
                    },
                    "color": [
                      0,
                      255,
                      0
                    ],
                    "visible": true,
                    "slider": [
                      1,
                      70
                    ]
                  },
                  {
                    "selection": {
                      "c": 42
                    },
                    "color": [
                      255,
                      0,
                      0
                    ],
                    "visible": true,
                    "slider": [
                      1,
                      150
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
        }
    }, 
    "layout": [
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
            "x": 0,
            "y": 0,
            "w": 4,
            "h": 3
        },
        {
            "component": "scatterplot", 
            "coordinationScopes": {"dataset": "A", "embeddingType": "A"}, 
            "x": 0, 
            "y": 3, 
            "w": 4, 
            "h": 3
        }, 
        {
            "component": "layerController",
            "coordinationScopes": {
              "spatialImageLayer": "A",
              "spatialSegmentationLayer": "A",
              "spatialPointLayer": "A"
            },
            "x": 4,
            "y": 0,
            "w": 2,
            "h": 2
        },
        {
            "component": "obsSets", 
            "coordinationScopes": {"dataset": "A"}, 
            "x": 4, 
            "y": 2, 
            "w": 2, 
            "h": 2
        }, 
        {
            "component": "featureList", 
            "coordinationScopes": {"dataset": "A"}, 
            "x": 4, 
            "y": 4, 
            "w": 2, 
            "h": 2
        }
    ], 
    "initStrategy": "auto"
};