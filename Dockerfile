FROM  node

RUN mkdir /my_app

COPY . /my_app

COPY package.json /my_app

WORKDIR /my_app

RUN npm install

EXPOSE 4000

CMD npm run start