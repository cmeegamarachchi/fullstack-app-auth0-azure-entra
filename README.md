# Full stack - two container application
This starter code contains a frontend and a backend, served in containers

### API
* Build using Python and FastAPI  
* Pydantic model validation
* to start
```bash
cd api
pip install --no-cache-dir -r requirements.txt
uvicorn main:app --reload
```

### Frontend
* Build using React, Tailwind and shadcn
* To start
```bash
cd frontend
npm install
npm run dev
```

### to start full stack
`sudo docker compose up --build`

### How to use
* Clone repo using vs-code dev-container feature  
* Once cloned and spawned in a dev container, run `sudo docker compose up --build`