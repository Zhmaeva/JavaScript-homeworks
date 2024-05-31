describe('Домашнее задание к лекции 5 «Классы»', () => {

  describe('Задача №1', () => {
    let printItem;

    beforeEach(function(){
      printItem = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
    });

    it('создание печатного издания', () => {
      expect(printItem).toBeDefined();
      expect(printItem.name).toEqual('Типовой школьный журнал');
      expect(printItem.releaseDate).toEqual(2019);
      expect(printItem.pagesCount).toEqual(102);
      expect(printItem.state).toEqual(100);
      expect(printItem.type).toEqual(null);
    });

    it('починка почти целого печатного издания (ограничение сеттером state)', () => {
      printItem.state = 90;
      printItem.fix();
      expect(printItem.state).toEqual(100);
    });

    it('починка печатного издания', () => {
      printItem.state = 50;
      printItem.fix();
      expect(printItem.state).toEqual(75);
    });

    it('геттер для свойства state', () => {
      printItem.state = 10;
      const spy = spyOnProperty(printItem, 'state', 'get').and.returnValue(10);
      expect(printItem.state).toBe(10);
      expect(spy).toHaveBeenCalled();
    });
    
    it('сеттер для свойства state', () => {
      const spy = spyOnProperty(printItem, 'state', 'set');
      printItem.state = 10;
      expect(spy).toHaveBeenCalled();
    });

    it('создание объекта Magazine', () => {
      printItem = new Magazine('Forbes', 2020, 180);
      expect(printItem.type).toEqual("magazine");
    });
    
    it('создание объекта Book', () => {
      printItem = new Book('А. Сапковский', 'Меч Предназначения', 1992, 384);
      expect(printItem.author).toEqual('А. Сапковский');
      expect(printItem.name).toEqual('Меч Предназначения');
      expect(printItem.releaseDate).toEqual(1992);
      expect(printItem.pagesCount).toEqual(384);
      expect(printItem.type).toEqual('book');
    });

    it('создание объекта NovelBook', () => {
      printItem = new NovelBook('А. Сапковский', 'Меч Предназначения', 1992, 384);
      expect(printItem.author).toEqual('А. Сапковский');
      expect(printItem.type).toEqual('novel');
    });
    
    it('создание объекта FantasticBook', () => {
      printItem = new FantasticBook('Джон Толкин', 'Властелин колец', 1954, 2093);
      expect(printItem.author).toEqual('Джон Толкин');
      expect(printItem.type).toEqual('fantastic');
    });
    
    it('создание объекта DetectiveBook', () => {
      printItem = new DetectiveBook('Агата Кристи', 'Десять негритят', 2019, 256);
      expect(printItem.author).toEqual('Агата Кристи');
      expect(printItem.type).toEqual('detective');
    });
  });

  describe('Задача №2', () => {
    let library, printItem;
  
    beforeEach(function(){
      library = new Library('Библиотека имени Ленина');
      printItem = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
    });

    it('создание библиотеки', () => {
      expect(library).toBeDefined();
      expect(library.name).toEqual('Библиотека имени Ленина');
      expect(library.books).toEqual(jasmine.any(Array));
    });
    
    it('добавление книги', () => {
      library.addBook(printItem);
      expect(library.books[0].name).toEqual('Типовой школьный журнал');
      expect(library.books.length).toEqual(1);
    });
    
    it('поиск книги', () => {
      const printItemAdditional = new PrintEditionItem('Блокнот для заметок', 2021, 100);
      library.addBook(printItemAdditional);
      library.addBook(printItem);
      const firstBook = library.findBookBy("releaseDate", 2019);
      expect(firstBook.name).toEqual('Типовой школьный журнал');
      const secondBook = library.findBookBy("releaseDate", 2154);
      expect(secondBook).toEqual(null);
    });
    
    it('выдача книги', () => {
      library.addBook(printItem);
      const firstBook = library.giveBookByName('Типовой школьный журнал');
      expect(firstBook.name).toEqual('Типовой школьный журнал');
      expect(library.books.length).toEqual(0);
      const secondBook = library.giveBookByName('Судовой журнал');
      expect(secondBook).toEqual(null);
    });
  })

  describe('Задание №2. Пункт 5. Написание тестов', () => {
    let library, book1, book2, book3, book4;

    beforeEach(function() {
      library = new Library('Публичная библиотека');
      book1 = new FantasticBook('Автор', 'Найденная книга', 1919, 666);
      book2 = new DetectiveBook('Яна Вагнер', 'Кто не спрятался', 2018, 510);
      book3 = new NovelBook('К.Ф. Брин', 'Руины из роз', 2021, 300);
      book4 = new Book('Кирилл Привалов', 'Яды: Полная история: от мышьяка до "Новичка"', 2022, 432);
    });

    it('создание новой библиотеки', () => {
      expect(library).toBeDefined();
      expect(library.name).toEqual('Публичная библиотека');
      expect(library.books).toEqual(jasmine.any(Array));
    });

    it('добавление книг разных типов', () => {
      library.addBook(book1);
      library.addBook(book2);
      library.addBook(book3);
      library.addBook(book4);
      expect(library.books[0].name).toEqual('Найденная книга');
      expect(library.books[1].releaseDate).toEqual(2018);
      expect(library.books[2].pagesCount).toEqual(300);
      expect(library.books[3].author).toEqual('Кирилл Привалов');
      expect(library.books.length).toEqual(4);
    });

    it('поиск книги 1919 года выпуска', () => {
      library.addBook(book1);
      library.addBook(book2);
      library.addBook(book4);
      const foundBook = library.findBookBy("releaseDate", 1919);
      expect(foundBook.name).toEqual('Найденная книга');
      const notFoundBook =library.findBookBy('pagesCount', 1);
      expect(notFoundBook).toEqual(null);
    });

    it('выдача книги', () => {
      library.addBook(book3);
      library.addBook(book4);
      const receivedBook = library.giveBookByName('Руины из роз');
      expect(receivedBook.name).toEqual('Руины из роз');
      expect(library.books.length).toEqual(1);
    });

    it('повреждение выданной книги', () => {
      book3.state = 40;
      expect(book3.state).toEqual(40);
    });

    it('восстановление выданной книги', () => {
      book3.state = 40;
      book3.fix();
      book3.fix();
      book3.fix();
      expect(book3.state).toEqual(100);
    });

    it('добавление восстановленной книги в библиотеку', () => {
      library.addBook(book3);
      expect(library.books.length).toEqual(1);
      expect(library.books[0].name).toEqual('Руины из роз');
    });
  });
});