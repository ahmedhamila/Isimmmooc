---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- 
##Conventions
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

II) Installation & Configuration
	1- Installer python 3
		version : 3.10
		build : 64 bits
		site web : https://www.python.org/

	2- Vous pouvez télecharger l'éditeur pycharm (Cette etape est optionnelle)
		lien :https://www.jetbrains.com/fr-fr/pycharm/

    6- Tapez la commande suivante pour installer Django
		commande : pip install django

	7- Tapez les commandes suivantes pour faire les migrations de données:
	    commande : a) python manage.py makemigrations
	               b) python manage.py migrate

	8- Tapez la commande suivante pour crée le super user du projet
		commande : python manage.py createsuperuser

III) Démarrage de l'application
	1- Afin de démarrer l'application en locale juste tapez la commande suivante :
		commande : python manage.py runserver
VI) Dependences et modules :

    1-pip install django-phonenumbers  
    2-pip install django-phonenumber-field
---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- 
##DataBase
I) Mot clé :
	1- Languages : SQL
	2- SGBD: MySQL

II) Instalation & Configuration
	1- Installer MySQL 3
		version : 5.7
		build : 64 bits
		site web : https://dev.mysql.com/doc/relnotes/mysql/5.7/en/
	2- Créer une base de la configuration suivante :
		nom de l'utilsateur : admin
		nom de la base de données : isimmmooc_db
		mot de passe : ""