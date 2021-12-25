## Real Time Chat Application

It is a real time chat application without using socket.io. It is developed with the following tech stack.

- Django
- Channels
- Redis
- React
- Material UI

### How to run locally

1. First clone the repo
2. Start the backend

```bash
$ cd backend

# activate a virtual env
$ python -m venv env
$ env\Scripts\activate

# install all the dependencies
$ pip install -r requirements.txt

# run the redis server
$ redis-server

# run the django server
$ django manage.py migrate
$ django mange.py runserver
```

3. Run the Fronend

```bash
$ cd frontend

# install all dependencies
$ yarn install

# run the server
$ npm start
```

_Developed By Sandip Sadhukhan_
