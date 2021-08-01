nodejs: 14.17.3     
npm: 6.14.13        
GULP CLI version: 2.3.0      
GULP Local version: 4.0.0         

Запуск: gulp    

# GLOBAL TOTOS:
- настроить вертикальные отступы между блоками (секциями) на адаптивах  
- насторить ховер эффекты   
- определить в макете часто повторяющие текста, заголовки, подзаголовки и вынести их в отдельные стили / компоненты. текущий подход сильно тормозит верстку

# NOTES: 
- У картинок на первом экране (большие сверла) указать одинаковую длинну с шириной а так же указать picture + source ( чтобы загружались картинки под конкретное разрешение устройства)
- Вертикальные расстояния между секциями делаем одинаковыми
- Максимальное использование компонентного подхода
- Наша продукция. Указываем для картинок загрузку: вначале .webp затем .png
- Указать ховеры для элементов
- Делаем mobile-first
- Наши публикации. Видео делаем модалкой. Слайдер можно сделать так, чтобы не выходил за контейнер.
- Карту делаем через npm-бибилиотеку
- TabBar внизу на мобилках
- Открытое меню скрывает AppBar. Справа от заголовка меню показываем крестик.

# COMPONENTS
### Welcome button (height, padding, font-size, uppercase?)
* 1920: 80 x 50 x 24 x uppercase
* 1000: 80 x 30 x 20 x uppercase
* 768: 80 x 30 x 18 x uppercase
* 640: 70 x 30 x 18 x uppercase
* 540: 60 x 20 x 14 x uppercase 
* 480: 60 x 15 x 14 x uppercase
* 320: 37 x 15 x 12 x uppercase
### Producer button (height, padding, font-size, uppercase?)
* 1920: 80 x 50 x 24 x uppercase
* 1000: 60 x 30 x 14 x uppercase
* 768: 50 x 30 x 14 x uppercase
* 640: 45 x 15 x 12 x uppercase
* 540: 60 x 35 x 14 x uppercase 
* 480: 60 x 30 x 14 x uppercase
* 320: 45 x 23 x 12 x uppercase

# ДИЗАЙН: 
* https://www.figma.com/file/g5g20usXMyuhgBeSTcSh2Y/%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2-%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D0%BE%D0%BE%D0%B1%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%BA%D0%B0?node-id=35%3A7

# ПРАВКИ:
* https://docs.google.com/document/d/1ozTYpQxkCiRnp9UqOtgJ-cq_MPfxXwoR1WhGmnqn4BY/edit