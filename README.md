# drf-angularjs-todolist
###### Simple web-based todo list app.
----------------


Backend:
- django (v1.8.13)
- django-rest-framework (v3.3.3)

Frontend:
- AngularJS (v1.0.8)
- AngularUI ui-bootstrap (v0.6.0)
- Twitter Bootstrap (v2.3.2)


### Setup:
###### Installation for running the application locally.
1. Initialize the Virtualenv 

    ```virtualenv venv```
    
2. Start the Virtualenv 

    ```source venv/bin/activate```
    
3. Install the package dependencies 

    ```pip install -r requirements.txt```
    
4. Migrate the database 

    ```python manage.py migrate```
    
5. Run the application 

    ```python manage.py runserver```
