from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

class Item(BaseModel):
    text: str
    is_done: bool = False

app = FastAPI()

items = []

@app.get("/items")
def get_items(limit: int = 10) -> list[Item]:
    return items[:limit]

@app.post("/items")
def create_item(item: Item) -> Item:
    items.append(item)
    return item

@app.get("/items/{item_id}")
def get_item(item_id: int) -> Item:
    try:
        return items[item_id]
    except IndexError:
        raise HTTPException(status_code=404, detail="Item not found")