from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "TalentSync API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Defaults to SQLite for immediate local dev, can be overridden by env vars for Postgres
    DATABASE_URL: str = "sqlite:///./talentsync.db"
    
    class Config:
        case_sensitive = True

settings = Settings()
