### Facade - Фасад 
структурный шаблон проектирования при котором выполнение сложной логики скрывается за вызовом более простого API.

или

структурный шаблон проектирования, который ==позволяет скрыть сложность системы== за счет: 
- инкапсуляции всех сложных процессов в рамках одной структуры.
- предоставлении наружу более простого API, который будет управления сложной системой.


![image](https://files.virgool.io/upload/users/14114/posts/cl0ni2k0gamt/s2fm0w1kfgnw.png)

#### Итого: 
Фасад берет на себя ответственность за общение со сложной частью системы: настройка, вызов специфических методов конкретных объектов и т.п.


#### Плюсы:
- Клиент не догадывается о существовании сложной системы с которой он взаимодействует.


#### Минусы:
- Рано или поздно, фасад может превратиться в божественный объект.  
- Используя фасады мы увеличиваем количество сущностей, что усложнает код. (помним принцип бритвы Оккамы)