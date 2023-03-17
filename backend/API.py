from main import app
from database import fetch_all_tasks, create_task, delete_task, update_task
from models import CreateTODO, UpdateTODO


@app.get("/todos")
async def get_todo():
    response = await fetch_all_tasks()
    return {"Tasks": response}


@app.post("/todos")
async def create_todo(todo: CreateTODO):
    response = await create_task(todo)
    return {"Task Created": response}


@app.put("/todos{_id}")
async def update_todo(_id: str, data: UpdateTODO):
    response = await update_task(_id, data)
    return {'Updated task with id= ': _id}


@app.delete("/todos{_id}")
async def delete_todo(_id: str):
    response = await delete_task(_id)
    return response
