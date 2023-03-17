from bson import ObjectId
from models import CreateTODO
from motor.motor_asyncio import AsyncIOMotorClient


client = AsyncIOMotorClient('mongodb://localhost:27017')
db = client.FarmStack
collections = db.Tasks


async def fetch_all_tasks():
    todos = []
    cursor = collections.find()
    async for document in cursor:
        todo = CreateTODO(name=document['name'], description=document.get('description'), status=document['status'])
        todos.append(todo)

    return todos


async def create_task(document):
    # Insert the validated document into the database
    cursor = await collections.insert_one(document.dict())

    # Return the created TODO item
    return document


async def update_task(_id: str, document):
    # Define filter and update
    select = {"_id": ObjectId(_id)}
    update = {"$set": {
        'name': document.name,
        'description': document.description,
        'status': document.status
    }}
    # Update document in collection
    result = collections.update_one(select, update)
    return result


async def delete_task(todo_id: str):
    result = await collections.delete_one({"_id": ObjectId(todo_id)})
    if result.deleted_count == 1:
        return {"message": f"Deleted TODO item with ID {todo_id}"}
    else:
        return {"message": f"TODO item with ID {todo_id} not found"}