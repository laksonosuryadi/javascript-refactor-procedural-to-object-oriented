// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     console.log("WAT")
//     $('.dice').append('<div class="die">0</div>')
//   })
//
//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1)
//       $(die).text(value)
//     })
//   })
// })

class Model {
  static randomizeDice(k, die){
    let value = Math.floor((Math.random()*6)+1)
    $(die).text(value)
  }
}

class Controller {
  static addDice() {
    console.log('WAT');
    $('.dice').append('<div class="die">0</div>')
  }

  static rollDice() {
    $('.die').each(Model.randomizeDice)
  }
}

class View {
  static Click() {
    $('#roller button.add').on('click', Controller.addDice)
    $('#roller button.roll').on('click', Controller.rollDice)
  }
}

$(document).ready(View.Click)
