nodejs: 14.17.3     
npm: 6.14.13        
GULP CLI version: 2.3.0      
GULP Local version: 4.0.0         

Запуск: gulp    

GLOBAL TOTOS:
- настроить вертикальные отступы между блоками (секциями) на адаптивах  
- насторить ховер эффекты   

NOTES: 
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

- .container - 1400px, разрешение экрана - 1430+
- .container - 1140px, разрешение экрана - 1200-1429
- .container - 1000px, разрешение экрана - 1020-1199
- .container - 735px, разрешение экрана - 768-1019
- .container - 604px, разрешение экрана - 640-767
- .container - 100%, разрешение экрана - 320-639