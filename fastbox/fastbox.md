# FastAPI Sandbox
Initial notes and code from trying out FastAPI. So far, it's just a few things based on the guides from the FastAPi docs (which are really good). FastAPI is not yet at version 1 during this time, but all I can say right now is that it's pretty fast to learn.
## Setup
1. Install uvicorn: `pip install uvicorn`
2. Install fastapi: `pip install fastapi`
## First Steps
1. Make a folder for the project, and `cd` into that folder
2. Create a `main.py` file
3. Import FastAPI: `from fastapi import FastAPI`
4. Create an app instance: `app = FastAPI()`
5. Create a path operation decorator
6. Create a path operation function (right below the path operation decorator)
7. Run the dev server: `uvicorn main:app --reload`
