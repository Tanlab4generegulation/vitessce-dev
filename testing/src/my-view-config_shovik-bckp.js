export const myViewConfig = {
  "name": "Bone Marrow CODEX data",
  "description": "Single cell data and annotations",
  "version": "1.0.7",
  "initStrategy": "auto",
  "datasets": [
    {
      "uid": "smithd30",
      "name": "smithd30",
      "files": [
        {
          "fileType": "anndata-cells.zarr",
          "url": "https://vitessce-cell-data.s3.amazonaws.com/vite-data.zarr/",
          "options": {
            "mappings": {"UMAP": {"key": "obsm/X_umap", "dims": [0, 1]}},
            "factors": [
              "obs/orig.ident",
              "obs/cluster_anno_coarse",
              "obs/cluster_anno_l1",
              "obs/cluster_anno_l2"
            ],
            "coordinationValues": {
              "obsType": "cell"
            }
          }
        },
        {
          "fileType": "anndata-cell-sets.zarr",
          "url": "https://vitessce-cell-data.s3.amazonaws.com/vite-data.zarr/",
          "options": [
            {"groupName": "origin", "setName": "obs/orig.ident"},
            {"groupName": "celltype_coarse", "setName": "obs/cluster_anno_coarse"},
            {"groupName": "celltype_l1", "setName": "obs/cluster_anno_l1"},
            {"groupName": "celltype_l2", "setName": "obs/cluster_anno_l2"}
          ],
          "coordinationValues": {
            "obsType": "cell"
          }
        },
        {
          "fileType": "anndata-expression-matrix.zarr",
          "url": "https://vitessce-cell-data.s3.amazonaws.com/vite-data.zarr/",
          "options": {"matrix": "X"}
        }
      ]
    }
  ],
  "coordinationSpace": {
    "dataset": {"A": "A"}, "embeddingType": {"A": "UMAP"}
  },
 "layout": [
  {"component": "description",
   "coordinationScopes": {"dataset": "A"},
   "x": 0,
   "y": 8,
   "w": 3,
   "h": 4},
  {"component": "scatterplot",
   "coordinationScopes": {"dataset": "A", "embeddingType": "A"},
   "x": 0,
   "y": 0,
   "w": 6,
   "h": 6},
  {"component": "cellSets",
   "coordinationScopes": {"dataset": "A"},
   "x": 6,
   "y": 5,
   "w": 2,
   "h": 7},
  {"component": "genes",
   "coordinationScopes": {"dataset": "A"},
   "x": 6,
   "y": 0,
   "w": 2,
   "h": 5,
   "props": {"variablesLabelOverride": "antigen"}},
  {"component": "heatmap",
   "coordinationScopes": {"dataset": "A"},
   "x": 0,
   "y": 6,
   "w": 6,
   "h": 4,
   "props": {"variablesLabelOverride": "antigen", "transpose": true}}
  ]
};