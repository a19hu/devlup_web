module.exports = {
    apps: [
      {
        name: "dev_web_server",
        script: "manage.py",
        args: "runserver 0.0.0.0:8002", 
        watch: true, 
        env: {
          "DJANGO_SETTINGS_MODULE": "server.settings",  
          "PYTHONUNBUFFERED": "1"
        }
      }
    ]
  };