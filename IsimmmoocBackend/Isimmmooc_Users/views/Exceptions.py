from rest_framework.exceptions import APIException


class MissingRequiredParameter(APIException):
    status_code = 400
    default_detail = "Missing a required parameter"
    default_code = "Missing a required parameter"