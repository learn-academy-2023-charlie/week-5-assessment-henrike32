# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.
# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
# filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
# filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
# I googled  a method to filter an array and discovered the .select method, I used the .select method and the .include method to get the stringsI wanted inside the 'beverages_array'

# result1 = beverages_array.select! { |string| string.include?(filter_letter_o) }
# result2 = beverages_array.select! { |string| string.include?(filter_letter_t) }

# Second approach, hard coded >>
# result3 = "coffee" + "tea".gsub("tea", " ") +  " , " + "juice".gsub("juice", " ") + "water".gsub("water", " ")+ "soda water"
# result4 = "coffee".gsub("coffee", " ") + "  tea" + " , "  + "juice".gsub("juice", " ") + "water" + " , "+ "soda water"
# p result3,result4
# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'  

# result_array = us_states.values.to_a.flatten.sort    
# gives me an output of => ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"] 

# def extract_val(hash)
    # values = hash.values.flatten.sort
# end
# us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 
# result = extract_val(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
    attr_accessor :model, :wheels, :current_speed
    def initialize (model)
        @model = model
        @wheels = 2
        @current_speed = 0

    end

    def bike_info
        "The #{:model} has #{:wheels} and is going #{:current_speed} mph."
    end
    # -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
    def pedal_faster(current_speed)
        # had to find a way to increase the initial speed and maintain the value, didn't knew if I could use 'Integer' as a incremental value, tried this out and it worked! Happy to actually do some code without referring to chatGPT or google.
        @current_speed =  @current_speed + current_speed
    end 

    def pedal_brake(break_speed)
        # in this scenario you want the speed to reduce but without going to zero, so I did a conditional statement to stop the operation when the speed would go to less than zero.
        @current_speed = @current_speed - break_speed 
# Didn't figured it out why I am getting ' 10 ,28 , nil , "negative speed doesn't exist" ' as an output instead of getting 23 I am getting nil, without lines of code 57-59 the code gives me the correct expected values except for the -2 one. Since I still have a lot to cover in this assessment I will keep pressing forward.
        # if @current_speed < 0
        #     "Negative speed doesn't exist"
        # end
    end
end

my_bike = Bike.new('Trek Bike') 
# => #<Bike:0x00000001035af4c0 @model="Trek Bike", @wheels=2, @current_speed=0>
# Like I learned during the last week assessment-review we should remove our puts commands, but since I didn't managed to complete it properly, this time I will leave it for troubleshooting purposes.
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.pedal_brake(5)
p my_bike.pedal_brake(25)

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
