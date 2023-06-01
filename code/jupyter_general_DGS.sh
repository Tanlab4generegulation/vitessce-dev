#!/bin/bash

# Example of running python script in a batch mode

#SBATCH --job-name=gen-note
#SBATCH --output=/mnt/isilon/cscb/codex/shovik/vitessce/code/notebook.txt
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --mem=250G
#SBATCH --time=8:00:00

#source /home/smithd30/.bashrc
#export NUMEXPR_MAX_THREADS=16
cd /mnt/isilon/cscb/shovik/vitessce

#jupyter lab --ip=0.0.0.0 --port=8817
jupyter-lab --ip=0.0.0.0 --no-browser

