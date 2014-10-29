# Open Data Index

This is the code that powers the [Open Data Index](http://index.okfn.org/).


## Setup

Some brief instructions, proper docs to come.

* Setup a virtual env
* Install dependencies: `pip install -r requirements.txt`
* Install the CLI: `cd cli && python setup.py install && cd ../`
* Grab data from the database: `python scripts/process.py`
* Populate the content sources from data: `odi populate --limited`
* `pelican content -o output -s config_default.py`
* `./develop-server` to run a server that watches and builds

[Pelican documentation for more information](http://docs.getpelican.com)


## Deployment

Steps to create a snapshot for deployment::

    odi populate
    odi deploy


## Data

Data is found in the `data` directory. This both powers the site build and is
usuable in its own right (as a Tabular Data Package).

### Preparation

Data is prepared by the python script `scripts/process.py`. This pulls data
from the Open Data Index Survey (Census), processes it in various ways and then
writes it to the `data` directory. If you want to

To run the script do:

    python scripts/process.py

### Populate

Once the data has been prepared via the `process.py` script, there is an additional step to create the source files that will be used to generate the static site. All source files for rendering pages live under `content/pages`, and in this location, everything under `datasets`, `historical` and `places` is generated by running the following script:

    python scripts/populate.py

## Visualisations

The Open Data Index has a small set of tools and patterns for implementing visualisations. The first visualisation is the **Choropleth map** (described below), and this is the reference implementation for other visualisations to follow.

Visualisations have the following features:

* A permalink for the visualisation (e.g.: /vis/map/)
* An embeddable version of the visualisation (e.g.: /vis/map/embed/)
* Tools for sharing the visualisation to social networks
* Tools to filter data in the visualisation
* An interface to pass state to a visualisation via URL params

### Choropleth map

Displays Open Data Index data via a map interface.

This visualisation is embedded in the project home page, and also available via its permalink:

* /vis/map/

Or its embeddable version:

* /vis/map/embed/


## API

Open Data Index exposes a (simple) API for programmatic access to data. Currently, the API is available in both JSON and CSV formats.

### API endpoints

* {format} refers to either `json` or `csv`

#### /api/entries.{format}

Returns all entries in the database.


#### /api/entries/{year}.{format}

Returns entries sliced by year.

Available years:

* 2014
* 2013


#### /api/datasets.{format}

Returns all datasets in the database.


#### /api/datasets/{category}.{format}

Returns all datasets sliced by category, where `category` is a slugified string of the dataset category.

Available categories:

* civic-information
* environment
* finance
* geodata
* transport


#### /api/places.{format}

Returns all places in the database.


#### /api/questions.{format}

Returns all questions in the database.
