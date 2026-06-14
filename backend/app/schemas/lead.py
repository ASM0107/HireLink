from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ContactLeadCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: str

class ContactLeadResponse(ContactLeadCreate):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True
