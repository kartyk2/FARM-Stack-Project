from typing import Optional
from bson import ObjectId
from pydantic import BaseModel


class CreateTODO(BaseModel):
    _id: Optional[ObjectId]
    name: str
    description: Optional[str]
    status: bool


class UpdateTODO(BaseModel):
    name: str
    description: Optional[str]
    status: bool
