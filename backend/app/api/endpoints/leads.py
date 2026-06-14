from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.db.models import ContactLead
from app.schemas.lead import ContactLeadCreate, ContactLeadResponse

router = APIRouter()

@router.post("/contact", response_model=ContactLeadResponse, status_code=201)
def create_contact_lead(lead_in: ContactLeadCreate, db: Session = Depends(get_db)):
    """
    Submit a new contact form lead.
    """
    db_lead = ContactLead(
        name=lead_in.name,
        email=lead_in.email,
        phone=lead_in.phone,
        message=lead_in.message
    )
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead

@router.get("/contact", response_model=list[ContactLeadResponse])
def get_contact_leads(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    Retrieve contact leads.
    """
    leads = db.query(ContactLead).offset(skip).limit(limit).all()
    return leads
