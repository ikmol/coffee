import json
import time
from django.shortcuts import render, render_to_response
from django.template import RequestContext
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponse
from order.forms import OrderForm
from django.core import serializers
from django.conf import settings





