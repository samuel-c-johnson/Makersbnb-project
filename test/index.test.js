describe('this is a test', () => {
  
  it('to be true', function() {
    expect(true).toBe(true);
  });
    


  describe('Index', () => {

    beforeEach(() => {
      var test = '<div id="test"><h1 id="title">test</h1></div>';

      document.body.insertAdjacentHTML(
        'afterbegin',
        test);
    });

    
    it('', function() {
      expect(document.getElementById('title').innerHTML).toBe('test');
    });
      
    // expect(element.find('h1').text()).toBe('hello')
    
  });

});