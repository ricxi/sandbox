from typing import Optional
from fastapi import FastAPI, Path, Body
from pydantic import BaseModel

app = FastAPI()

# Declare a data model by extending pydantic's BaseModel
class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

class User(BaseModel):
    username: str
    fullname: Optional[str] = None

# Make the request body for the item model optional by setting its default to None
# Call with something like this: http://localhost:8000/items/2, and 
# using a body like this: {"name": "Foo","description": "The pretender","price": 42.0,"tax": 3.2}
@app.put("/items/{item_id}")
async def update_item(
    *,
    item_id: int = Path(..., title="ID of item to update", ge=0, le=1000),
    q: Optional[str] = None,
    item: Optional[Item] = None # request body for the item model is optional because =None
):
    results = {"item_id": item_id}
    if q:
        results.update({"q": q})
    if item:
        results.update({"item": item})
    return results


# Call the route below like this: http://localhost:8000/items/2/user/1, and
# using a body like this:
# {
#     "item": {
#         "name": "Foo",
#         "description": "The pretender",
#         "price": 42.0,
#         "tax": 3.2
#     },
#     "user": {
#         "username": "dave",
#         "full_name": "Dave Grohl"
#     },
#     "priority": 3
# }
# 1. Multiple body parameters can be declared
# 2. Create a singlular body key without using BaseModel with the Body function
#    If you don't use the Body function, FastAPI will assume it is a query parameter
@app.put("/items/{item_id}/user/{user_id}")
async def update_item_by_user(item_id: int, user_id: int, item: Item, user: User, priority: int = Body(...)):
    return {
        "item_id": item_id,
        "user_id": user_id,
        "item": item,
        "user": user,
        "priority": priority
    }

# Passing the argument embed=True to the Body function, like this "item: Item = Body(..., embed=True)",
# will tell FastAPI to expect the Item model to be embedded in another object.
# For example, it will expect this:
# {
#     "item": {
#         "name": "Foo",
#         "description": "The pretender",
#         "price": 42.0,
#         "tax": 3.2
#     }
# }

