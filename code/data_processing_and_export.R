# Processing Shovik data for vitessce display
# links:
# seurat data, integrated -- /mnt/isilon/tan_lab_imaging/Analysis/bandyopads/NBM_CODEX_Atlas/Combined_Analysis/Seurat/Annotate_Cells_Step3/objects/immune.combined_final_040523.RDS
# demo sample (raw dat) -- mnt/isilon/tan_lab_imaging/FUSION/NBM/NBM27_H10_CITRATE_REIMAGE/H10/Scan1/H10_Scan1.qptiff
# demo sample mask -- mnt/isilon/tan_lab_imaging/FUSION/NBM/NBM27_H10_CITRATE_REIMAGE/H10/Scan1/mesmer/Scan1_segmentation_cell.tif
# FUSION images -- mnt/isilon/tan_lab_imaging/FUSION/NBM
# mnt/isilon/tan_lab_imaging/Analysis/bandyopads/NBM_CODEX_Atlas/Combined_Analysis/Seurat/Neighborhood_Analysis_Step4/output/neighborhood.csv
# 
# NOTE: Cell type annotation - cluster_anno_coarse or cluster_anno_l2
#
# Also include flat images that display non-cell features like bone
# ...saved to "data"

library(Seurat)
library(SeuratDisk)
library(dplyr)

dat <- readRDS("/mnt/isilon/tan_lab_imaging/Analysis/bandyopads/NBM_CODEX_Atlas/Combined_Analysis/Seurat/Annotate_Cells_Step3/objects/immune.combined_final_040523.RDS")

dat_out <- subset(dat, subset = orig.ident == "SB67_NBM27_H10_CODEX_Mesmer")
str(dat_out)

dat_out@meta.data <- dat_out@meta.data %>% select(!contains("Metadata"))
str(dat_out@meta.data)

dat_out$cluster_anno_l1 <- as.character(dat_out$cluster_anno_l1)
dat_out$cluster_anno_coarse <- as.character(dat_out$cluster_anno_coarse)
dat_out <- RenameCells(dat_out, new.names = as.character(dat_out$CellID))
SaveH5Seurat(dat_out, filename = "data/H10_processed.h5Seurat", overwrite = T)
Convert("data/H10_processed.h5Seurat", dest = "h5ad", overwrite = T)
