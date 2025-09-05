from pygame import Rect
from effects import draw_key_effect


def draw_keys(screen,key_rects,pressed_keys):
    for i,rect in enumerate(key_rects):
        is_pressed = i in pressed_keys
        draw_key_effect(screen,rect,is_pressed) 


def create_key_rects(start_x=50,start_y=100,key_width=50,key_height=100,keys=7):
    key_rects = []
    for i in range(keys):
        rect = Rect(start_x + i * (key_width + 10), start_y, key_width, key_height)
        key_rects.append(rect)
    return key_rects