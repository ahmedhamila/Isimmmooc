# MOOC Platform

Welcome to the MOOC platform, a comprehensive online course platform created as part of an academic project in the first year of an engineering degree. This platform offers a seamless and interactive learning experience for students and formers.

## Technologies Used
- Frontend: 
  - React, a popular JavaScript library for building user interfaces, is used to create a dynamic and responsive frontend for the platform. 
  - Material-UI (MUI) is used for responsive design, ensuring that the platform is accessible and usable on different devices and screen sizes. 
  - Redux, a state management library, is used to store and manage the application's state, making it easier to manage complex data and interactions.
  - RTK Query is used to handle GraphQL queries and mutations, allowing for efficient and flexible data retrieval and manipulation.

- Backend: 
  - Django, a high-level Python web framework, is used to handle the backend logic and provide a RESTful API. 
  - Django Rest Framework (DRF) is used to simplify the creation of RESTful APIs, allowing for easy communication between the frontend and backend.

## Features
- Create account: Users can create an account as a student or former. This allows for personalized experiences and tailored course recommendations.

- View and enroll in courses (for students): Students can view the available courses, read their descriptions, and enroll in the ones they are interested in.

- Add and manage courses (for formers): Formers can create new courses, add content and assignments, and manage their courses.

## Benefits of the Technologies Used
- React: The use of React allows for a highly dynamic and interactive user interface, providing a smooth and engaging experience for users.

- Material-UI (MUI): MUI ensures that the platform is accessible and usable on different devices and screen sizes, providing a consistent experience for users regardless of the device they use.

- Redux: Redux provides a centralized store for the application's state, making it easier to manage complex data and interactions. This leads to a more organized and efficient codebase.

- RTK Query: RTK Query enables efficient and flexible data retrieval and manipulation, allowing for a smooth and responsive user interface.

- Django: Django's high-level architecture allows for a fast and efficient development process, with a focus on security and scalability.

- Django Rest Framework (DRF): DRF provides an easy-to-use API for communication between the frontend and backend, allowing for seamless and secure data transfer.

## Getting Started
To run the project locally, follow these steps:
1. Clone the repository
2. Install the required packages: `npm install` (for frontend) and `pip install -r requirements.txt` (for backend)
3. Run the backend server: `python manage.py runserver`
4. Run the frontend server: `npm start`
5. Open your browser and visit `http://localhost:3000` to access the platform.

## Contribute
We welcome contributions from the community. If you have any suggestions or bug reports, feel free to open an issue or make a pull request.



---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- 
## Demo and Specification
You can refer to the  demo and also to the specification of this application which are under the main tree.

[Demo](IsimmmoocProject.mp4) |
[Specification](isimmmooc.pdf) |

---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- 
## For those who intend to run this app

## Conventions

I) Déclaration des Classes :
	language utilisée : (ENGLISH)
	1-nom de la classe : 
		. commence avec une lettre MAJ et si elle se compose de plusieurs mots en met la premiere lettre de chaque mot en MAJ sans separateur .
		exemple : Class MyClass , Class ModelNameAdminView
	2-attributs de Classes:
		.les attributs sont ecrit en miniscule en separant les mots avec "_" (le nom de l'attribut doit etre significatif par rapport à son role)
II) Déclaration des Methodes :
	1-nom de la methode : 
		. commence avec une lettre min et si elle se compose de plusieurs mots en met la premiere lettre de chaque mot en MAJ sans separateur .
		exemple : def myMethod , def methodToDoSomething


---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- 

##Back-End

I) Mot clé :
	1- Languages : python
	2- Frameworks : django

II) Installation & Configuration :

	1- Installer python 3
		version : 3.10
		build : 64 bits
		site web : https://www.python.org/

	2- Vous pouvez télecharger l'éditeur pycharm (Cette etape est optionnelle)
		lien :https://www.jetbrains.com/fr-fr/pycharm/

    3- Tapez la commande suivante pour installer Django
		commande : pip install django

	4- Tapez les commandes suivantes pour faire les migrations de données:
	    commande : a) python manage.py makemigrations
	               b) python manage.py migrate

	5- Tapez la commande suivante pour crée le super user du projet
		commande : python manage.py createsuperuser

III) Démarrage de l'application :

	1- Afin de démarrer l'application en locale juste tapez la commande suivante :
		commande : python manage.py runserver
VI) Dependences et modules :

    1-pip install django-phonenumbers  
    2-pip install django-phonenumber-field
	3-pip install djangorestframework
	4-pip install django-rest-swagger
	
---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- 

## Front-End

I) Mot clé :

	1- Languages : JavaScript
	2- Frameworks : React

II) Installation & Configuration :

	1- Installer Node
		version : v18.10.0
		build : 64 bits
		site web : https://nodejs.org/

	2- Vous pouvez télecharger l'éditeur VsCode (Cette etape est optionnelle)
		lien :https://code.visualstudio.com/

III) Démarrage de l'application:

	1- Afin de démarrer l'application en locale juste tapez la commande suivante :
		commande : npm start
	
---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- 
## DataBase
I) Mot clé :

	1- Languages : SQL
	2- SGBD: MySQL

II) Instalation & Configuration :

	1- Installer MySQL 3
		version : 5.7
		build : 64 bits
		site web : https://dev.mysql.com/doc/relnotes/mysql/5.7/en/
		
	2- Créer une base de la configuration suivante :
		nom de l'utilsateur : admin
		nom de la base de données : isimmmooc_db
		mot de passe : ""

