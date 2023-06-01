export const myViewConfig = {
    "name": "Test CODEX data",
    "description": "HVCD1, region 1",
    "version": "1.0.15",
    "initStrategy": "auto",
    "datasets": [
        {
            "uid": "smithd30",
            "name": "smithd30",
            "files": [
                {
                    "fileType": "anndata.zarr",
                    "url": "https://vitessce-cell-data.s3.amazonaws.com/HVCD1_adata.zarr",
                    "coordinationValues": {
                    "obsType": "cell",
                    "featureType": "gene",
                    "featureValueType": "expression"
                    },
                    "options": {
                        "obsLocations": {
                            // Accepts the same options as obsLocations.anndata.zarr
                            "path": "obsm/centroids"
                        },
                        "obsSegmentations": {
                            // Accepts the same options as obsSegmentations.anndata.zarr
                            "path": "obsm/X_segmentations"
                        },
                        "obsEmbedding": [
                            {
                                // Accepts a superset of the options from obsEmbedding.anndata.zarr
                                // Should point to an array of (d1, d2) coordinate pairs, one coordinate pair per obs/cell.
                                "path": "obsm/X_umap",
                                // An embeddingType must be specified to distinguish between multiple embedding arrays.
                                "embeddingType": "UMAP"
                            },
                            {
                                "path": "obsm/X_pca",
                                "dims": [4, 5],
                                "embeddingType": "PCA"
                            }
                        ],
                        // "obsLabels": [
                        //     {
                        //         // Accepts a superset of the options from obsLabels.anndata.zarr
                        //         "path": "obs/alt_cell_id",
                        //         // An obsLabelsType must be specified to distinguish between multiple label columns.
                        //         "obsLabelsType": "Alternate cell ID"
                        //     }
                        // ],
                        "obsSets": [
                            // Accepts the same options as obsSets.anndata.zarr
                            {
                                "name": "Cell Type Annotations",
                                "path": ["obs/new_pheno"]
                            },
                            {
                                "name": "motif",
                                "path": ["obs/motif_name"]
                            }
                        ],
                        "obsFeatureMatrix": {
                            // Accepts the same options as obsFeatureMatrix.anndata.zarr
                            // Should point to the observation-by-feature matrix
                            "path": "X"
                        }
                    }
                },
                {
                    "fileType": "image.ome-zarr",
                    "url": "https://vitessce-cell-data.s3.amazonaws.com/HVCD1_wrapper.ome.zarr"
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
        "spatialTargetX": {
        "A": 16000
        },
        "spatialTargetY": {
        "A": 20000
        },
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
                    1473
                ]
                },
                {
                "selection": {
                    "c": 1
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
                    "c": 2
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
        // "spatialSegmentationLayer": {
        // "A": {
        //     "opacity": 1, "radius": 0, "visible": true, "stroked": false
        // }
        // },
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
        // "spatialSegmentationLayer": "A",
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
    // {
    //   "component": "heatmap",
    //   "props": {
    //     "transpose": true
    //   },
    //   "x": 2,
    //   "y": 4,
    //   "w": 5,
    //   "h": 2
    // },
    // {
    //   "component": "obsSetFeatureValueDistribution",
    //   "x": 7,
    //   "y": 4,
    //   "w": 5,
    //   "h": 2
    // },
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
