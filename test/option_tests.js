
var assert = require('assert');
var MiniApiClient = require('../lib/mini-api-client');
var nock = require('nock');
var apiKey = "OTk5OTk5OTk5OQ==";
var client;

var testData = {
  "optionId": "205"
};

beforeEach(function() {
  client = new MiniApiClient({"apiKey":apiKey});
});


describe("MiniApiClient options endpoints", function() {
  var option = nock('http://staging-api.buildmymini.ca:80')
    .get('/v2/en/options/205?appId=OTk5OTk5OTk5OQ==')
    .reply(200, "{\"Code\":\"205\",\"Name\":\"Automatic Transmission\",\"Description\":\"This 6-speed transmission can change gears automatically or let you control the shift points using Sport mode. Prepare to experience maximum control and motoring exhilaration.\",\"Price\":\"1200.00\",\"Category\":\"INTERIOR\"}");

  describe("/options/{code}", function() {
    it("should return an object", function(done) {
      var res = client.get({"endPoint":"option","id":testData.optionId}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
  });

  var options = nock('http://staging-api.buildmymini.ca:80')
  .persist()
  .get('/v2/en/options?appId=OTk5OTk5OTk5OQ==')
    .reply(200, "[{\"Code\":\"205\",\"Name\":\"Automatic Transmission\",\"Description\":\"This 6-speed transmission can change gears automatically or let you control the shift points using Sport mode. Prepare to experience maximum control and motoring exhilaration.\",\"Price\":\"1200.00\",\"Category\":\"INTERIOR\"}," + 
         "{\"Code\":\"226\",\"Name\":\"Sport Suspension\",\"Description\":\"For maximum go-kart feeling, MINI offers an optional Sport Suspension, using stiffer springs, dampers, and thicker anti-sway bars to deliver a tightly tuned ride--especially on aggressive bends.\",\"Price\":\"250.00\",\"Category\":\"EXTERIOR\"}," + 
         "{\"Code\":\"255\",\"Name\":\"Leather Sport Steering Wheel\",\"Description\":\"Sport Steering Wheel in black leather with optional carbon fiber spokes. (OR) For the ergonomically inclined: leather hand grips with cruise and stereo controls at your finger tips on this sport-inspired steering wheel.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"}," +
         "{\"Code\":\"313\",\"Name\":\"Exterior Mirror Package\",\"Description\":\"Electronically folding and heated exterior mirrors help you get your MINI into tight spots while still maintaining visibility on those frosty winter days. \",\"Price\":\"500.00\",\"Category\":\"EXTERIOR\"}," +
         "{\"Code\":\"322\",\"Name\":\"Comfort Access\",\"Description\":\"While keyless entry is standard, Comfort Access takes it to a whole new level as it adds a transceiver to your key that your MINI will recognize. This allows you to leave the key in your pocket and still lock and unlock the car by only pressing a button on any of the front door handles.\",\"Price\":\"390.00\",\"Category\":\"INTERIOR\"}," + 
         "{\"Code\":\"321\",\"Name\":\"Body Colour Exterior Parts\",\"Description\":\"Exterior parts, such as your side-view mirrors, are painted the same colour that you selected for your MINI\\u0027s body. \",\"Price\":\"100.00\",\"Category\":\"EXTERIOR\"}," + 
         "{\"Code\":\"327\",\"Name\":\"White Bonnet Stripes\",\"Description\":\"Classic white bonnet stripes with black pin-line detailing help give your MINI a vintage racer look. Available with certain colors.\",\"Price\":\"130.00\",\"Category\":\"STRIPE\"}," + 
         "{\"Code\":\"329\",\"Name\":\"Black Bonnet Stripes\",\"Description\":\"Classic black bonnet stripes with pin-line detailing in white help give your MINI a vintage racer look\",\"Price\":\"130.00\",\"Category\":\"STRIPE\"}," + 
         "{\"Code\":\"345\",\"Name\":\"Chrome Line Interior\",\"Description\":\"The chrome line interior adds classic chrome finishes to the dials and knobs of your MINI\\u0027s instrument panel, central air vents, gear shifter, and front and center-rear cup holders. \",\"Price\":\"190.00\",\"Category\":\"INTERIOR\"}," +
         "{\"Code\":\"346\",\"Name\":\"Chrome Line Exterior\",\"Description\":\"Give your MINI a little extra polish with mirror caps, rollover protection bar, lower front brake ducts, rear grille surround and rear boot lid handle in chrome.\",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"}," + 
         "{\"Code\":\"359\",\"Name\":\"Electric Front Window Defroster\",\"Description\":\"Defrost your windows on the coldest winter days with this electrically heated front window. \",\"Price\":\"190.00\",\"Category\":\"INTERIOR\"}," + 
         "{\"Code\":\"382\",\"Name\":\"White Roof and Mirror Caps\",\"Description\":\"Roof and side-view mirrors in contrasting white give your MINI an even more distinct appearance.\",\"Price\":\"0.00\",\"Category\":\"ROOFCAP\"},{\"Code\":\"383\",\"Name\":\"Black Roof and Mirror Caps\",\"Description\":\"Roof and side-view mirrors in contrasting black give your MINI an even more distinct appearance.\",\"Price\":\"0.00\",\"Category\":\"ROOFCAP\"},{\"Code\":\"387\",\"Name\":\"Wind Deflector\",\"Description\":\"The stowable wind deflector minimizes cockpit airflow, helping keep the driver and co-pilot cozy during open-motoring sessions.\",\"Price\":\"620.00\",\"Category\":\"EXTERIOR\"}," +
         "{\"Code\":\"403\",\"Name\":\"Glass Sunroof\",\"Description\":\"The huge Dual-Pane Panoramic Sunroof covers over 60% of a MINI\\u0027s roof surface and provides incredible sky views and fresh air for front and rear passengers. And both the front and rear sunroof panels tilt up into partially open positions for maximum flexibility.\",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"}," + 
         "{\"Code\":\"405\",\"Name\":\"Chromed Exterior Mirror Caps\",\"Description\":\"Add a touch of modern shine to your MINI with side-view mirror caps in chrome. Included with Chrome Line Exterior.\",\"Price\":\"0.00\",\"Category\":\"CAP\"},{\"Code\":\"431\",\"Name\":\"Auto Dimming Interior Mirror\",\"Description\":\"The auto-dimming rear-view mirror uses light-sensitive elements to automatically help minimize glare from headlights behind you.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"473\",\"Name\":\"Front Centre Armrest\",\"Description\":\"The foldable center arm rest conveniently offers extra support and storage space\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"}," + 
         "{\"Code\":\"481\",\"Name\":\"Sport Seats\",\"Description\":\"Our 6-way adjustable Sport Seats (with height control) offer enhanced support, especially on sharp turns, where larger side-bolsters help keep you snugly in place.\",\"Price\":\"450.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"494\",\"Name\":\"Heated Front Seats\",\"Description\":\"What\\u0027s happening hot stuff? Our quick acting heated front seats help keep your booty warm and toasty in even the coldest weather.\",\"Price\":\"450.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"502\",\"Name\":\"Headlight Washers\",\"Description\":\"Our optional Xenon headlamps are not only great at night and in bad weather, but they can also clean themselves with retractable power washers to maintain the best forward visibility possible. \",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"}," + 
         "{\"Code\":\"507\",\"Name\":\"Park Distance Control, rear\",\"Description\":\"Using ultrasonic sensors to detect if there are any bumper-height obstacles behind your MINI, the rear Park Distance Control system adds an extra measure of security whenever you\\u0027re backing up. \",\"Price\":\"450.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"521\",\"Name\":\"Rain Sensor w/ Auto Headlamps\",\"Description\":\"The rain sensor, when engaged, uses infrared sensors to detect rain and automatically run the windshield wipers so you can concentrate on driving. Our auto headlamps can turn themselves on as it becomes darker outside. \",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"522\",\"Name\":\"Bi-Xenon Headlights\",\"Description\":\"Headlamps using Xenon gas provide exceptionally crisp illumination and have more than twice the power of conventional halogen systems. They also feature auto-height leveling to maintain a consistent beam of light in front of you. \",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"}," + 
         "{\"Code\":\"524\",\"Name\":\"Adaptive Headlights\",\"Description\":\"These technically sophisticated headlights automatically turn their beams around each bend in the road to illuminate what\\u0027s ahead. Turn the car right and the headlights turn right. Turn it left, and the headlights angle left. \",\"Price\":\"100.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"534\",\"Name\":\"Automatic Climate Control\",\"Description\":\"While the standard air conditioning still gets those icicles forming, this option adds fully-electronic control to automatically maintain the temperature you desire. Meanwhile, the active cabin filtration system helps ensure that malodorous scents and polluted air have a difficult time entering the cockpit. \",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"620\",\"Name\":\"Voice Recognition\",\"Description\":\"A voice recognition system allows you to control features such as the telephone, climate control, navigation and sound systems with spoken commands.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"}," + 
         "{\"Code\":\"655\",\"Name\":\"SIRIUS Satellite Radio Tuner\",\"Description\":\"Imagine driving in your MINI, listening to the music you want without the hassle of commercials, CDs or playlists. Imagine cheering on your favorite sports team, and listening to channels of comedy, talk, news, entertainment, and more all in one place. Welcome to the world of SiriusXM standard in all new MINI\\u0027s with a 1-year subscription to the Sirius Select Package. Visit www.siriusxm.com/getmostoftrial for more information and subscriber benefits. (*If you decide to continue your SiriusXM service.)\",\"Price\":\"550.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"674\",\"Name\":\"Harman Kardon Sound System\",\"Description\":\"Turn your MINI into a mobile concert hall with this premium Harman/Kardon sound system featuring an immersive Digital Sound Processor for a concert-like experience delivered by 10 speakers on eight channels with 480 watts of dynamic power.\",\"Price\":\"750.00\",\"Category\":\"INTERIOR\"}," +
         "{\"Code\":\"785\",\"Name\":\"White Turn Signals\",\"Description\":\"These side-body white turn signals offer a clean, modern alternative to the typical amber signals.\",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"2P8\",\"Name\":\"17\\\\\\\" Cross Spoke Wheels\",\"Description\":\"17\\\\\\\" x7\\\\\\\" wheels in our Cross Spoke design. \",\"Price\":\"0.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2XA\",\"Name\":\"Shift Paddles\",\"Description\":\"Shift paddles are located on the steering wheel to allow you to quickly switch to manual mode in Steptronic, while your hands stay on the steering wheel at all times. \",\"Price\":\"100.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"3A1\",\"Name\":\"John Cooper Works Aerodynamic Kit\",\"Description\":\"The aero kit includes a tastefully designed front and rear apron, side skirts, grille sill skirts, bonnet grille, upper and lower bumper grilles and license plate carrier. All parts are finished in primer ready for paint except the grilles, which are black.\",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"}," +
         "{\"Code\":\"3A2\",\"Name\":\"Black Reflectors\",\"Description\":\"Black Reflectors help make your MINI more visible to other cars and pedestrians. Plus, their sleek design and black colouring give your MINI a sporty, yet tasteful, look.\",\"Price\":\"75.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"3A3\",\"Name\":\"Red Roof and Mirror Caps\",\"Description\":\"Roof and side-view mirrors in contrasting red give your MINI a striking appearance.\",\"Price\":\"0.00\",\"Category\":\"ROOFCAP\"},{\"Code\":\"3AN\",\"Name\":\"Silver C Pillars\",\"Description\":\"Rear C-Pillars and trim in silver. \",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"4AA\",\"Name\":\"Anthracite Roofliner\",\"Description\":\"Turns the interior roof, A, B, and C frame pillars, sun visors, and grab handles of your MINI a dark anthracite color instead of the standard Beige.\",\"Price\":\"180.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"4AU\",\"Name\":\"Extended Decor Contents\",\"Description\":\"Add a little flair with decorative silver rings around door handles and loudspeakers in the doors and cup holders.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"}," + 
         "{\"Code\":\"4BC\",\"Name\":\"Interior Trim Fluid Silver\",\"Description\":\"Interior detailing, such as the instrument panel, door rings and door pockets, are coloured in Fluid Silver to give your MINI a polished look. \",\"Price\":\"0.00\",\"Category\":\"TRIM\"},{\"Code\":\"4BD\",\"Name\":\"Interior Trim Piano Black\",\"Description\":\"Interior detailing, such as the instrument panel, door rings and door pockets, are coloured in Piano Black to give your MINI a sophisticated edge. \",\"Price\":\"0.00\",\"Category\":\"TRIM\"},{\"Code\":\"4CY\",\"Name\":\"Interior Trim Chili Red\",\"Description\":\"Interior detailing, such as the instrument panel, door rings and door pockets, are coloured in Chili Red to give your MINI some extra punch. \",\"Price\":\"0.00\",\"Category\":\"TRIM\"},{\"Code\":\"4D5\",\"Name\":\"Contrasting interior colour Polar Beige\",\"Description\":\"Polar Beige door inserts add a splash of color to the Carbon Black door panels.\",\"Price\":\"100.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"4DA\",\"Name\":\"Interior Trim Striped Alloy\",\"Description\":\"A distinctively modern Striped Alloy dash panel and door handle with contrasting black door ring.\",\"Price\":\"0.00\",\"Category\":\"TRIM\"}," + 
         "{\"Code\":\"4DF\",\"Name\":\"Piano Black Cockpit Surface\",\"Description\":\"The glossy Piano Black interior surface strikes a refined note.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"4FA\",\"Name\":\"Recaro Sport Seats\",\"Description\":\"Dating back to their roots as master saddlers over 100 years ago, Recaro is the unofficial authority on automotive sport & racing seats\",\"Price\":\"2000.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"4UF\",\"Name\":\"Sport Button\",\"Description\":\"When you\\u0027re looking for even more motoring fun, just press the Sport Button. This standard feature will adjust various electronic settings in your MINI to provide more rapid acceleration response and tighter steering. If paired with an automatic transmission, it will even adjust your shift points for quicker gear changes. \",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"5DT\",\"Name\":\"Dynamic Traction Control\",\"Description\":\"Perfect for adventurous driving, MINI\\u0027s allow drivers to turn DSC + DTC functions off and grant more responsibility to the pilot.\",\"Price\":\"325.00\",\"Category\":\"EXTERIOR\"}," +
         "{\"Code\":\"6FP\",\"Name\":\"Integrated Visual Display\",\"Description\":\"The Integrated Visual Display is one of many features available to help keep you safely connected to your Media while driving.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"6ND\",\"Name\":\"Media Connect ( Includes Bluetooth and USB Audio Integration)\",\"Description\":\"Media Connect includes Bluetooth and USB Audio Integration to help you stay connected while keeping your eyes on the road ahead. \",\"Price\":\"490.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"6NE\",\"Name\":\"Bluetooth and USB Audio\",\"Description\":\"Keep your eyes on the road and hands on the wheel with this Bluetooth hands-free system that lets you control your phone or MP3 device via the stereo controls. iPod cable included. For more info go to www.miniusa.com/bluetooth\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"6NF\",\"Name\":\"Smartphone Integration\",\"Description\":\"Smartphone Integration allows you to interface your smartphone, such as your iPhone or Blackberry, with your MINI. \",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"6NM\",\"Name\":\"MINI Connected\",\"Description\":\"MINI Connected is MINI\\u0027s take on the best in iPhone(R) integration. Stay in touch with your friends with Twitter access, check out the latest in music worldwide with web radio and get up-to-date RSS feeds from your favorite news sources. Simply download the free MINI Connected iPhone app from the iTunes store and revel in the world of in-car entertainment while keeping driver distraction to a minimum. \",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"}," + 
         "{\"Code\":\"6UM\",\"Name\":\"MINI navigation system\",\"Description\":\"Get turn-by-turn directions, in 3D, to any location in the U.S. or Canada on this portable MINI navigation unit. Features touch screen functionality with audible directions so you can keep your eyes on the road. \",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"6VC\",\"Name\":\"Combox controller\",\"Description\":\"Combox controller allows you to interface your smartphone, such as your iPhone or Blackberry, with your MINI. \",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"7L5\",\"Name\":\"Wired (includes 6UM MINI Navigation System)\",\"Description\":\"MINI\\u0027s Wired Package includes Bluetooth & USB Audio, MINI\\u0027s navigation system, smartphone integration, and hands-free voice recognition. With this package, you can stay connected while  staying safe.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"Z3P\",\"Name\":\"Front Fog Lights\",\"Description\":\"Front Fog Lamps enhance visibility during inclement driving conditions and help add to a MINI\\u0027s sporty appearance.\",\"Price\":\"250.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"Z3Q\",\"Name\":\"Rear Fog Lights\",\"Description\":\"The rear fog lamp helps make your MINI more visible from behind in poor visibility conditions.\",\"Price\":\"100.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"ZGD\",\"Name\":\"Multi-function Steering Wheel\",\"Description\":\"With a Multi-functional Steering Wheel, cruise and stereo controls are at your fingertips, helping your quickly pass disagreeable music while keeping your hands on the wheel. \",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"}," + 
         "{\"Code\":\"USB\",\"Name\":\"USB Audio Integration\",\"Description\":\"USB Audio Integration allows your to connect your digital music player directly to the stereo. \",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"BTT\",\"Name\":\"Bluetooth Wireless Technology\",\"Description\":\"Bluetooth Wireless Technology makes in-car cell phone use safer and more convenient. Simply wear the Bluetooth device in your ear, and make or accept phone calls at the push of a single button. \",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"3AK\",\"Name\":\"Silver Roof Bonnet Stripes\",\"Description\":\"Soon-to-be-Classic silver bonnet stripes on the roof of your MINI with pin-line detailing in black help give your MINI a vintage racer look. \",\"Price\":\"130.00\",\"Category\":\"STRIPE\"},{\"Code\":\"3AZ\",\"Name\":\"John Cooper Works Bonnet Stripe\",\"Description\":\"John Cooper Works Bonnet Stripes with pin-line detailing in Chili Red help give your MINI a dynamic look. (Note: John Cooper Works Bonnet stripes are available with black or Chili Red roofs for the Hardtop and Clubman.)\",\"Price\":\"130.00\",\"Category\":\"STRIPE\"},{\"Code\":\"3A7\",\"Name\":\"Black Sport Stripes\",\"Description\":\"Twin parallel black bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"250.00\",\"Category\":\"STRIPE\"},{\"Code\":\"3A8\",\"Name\":\"Red Sport Stripes\",\"Description\":\"Twin parallel red bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"250.00\",\"Category\":\"STRIPE\"}," + 
         "{\"Code\":\"2GP\",\"Name\":\"17\\\\\\\" 5-Star Double Spoke Alloy Wheels\",\"Description\":\"17\\\\\\\" wheels in our 5-Star Double Spoke design. \",\"Price\":\"0.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2GT\",\"Name\":\"18\\\\\\\" Turbo-Fan Light Alloy Wheels\",\"Description\":\"18\\\\\\\" x 7.5\\\\\\\" lightweight alloy wheels in our Turbo-Fan design. \",\"Price\":\"0.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2GU\",\"Name\":\"18\\\\\\\" 5-Star Double Spoke Composite, Jet Black\",\"Description\":\"18\\\\\\\" x 7.5\\\\\\\" wheels in our 5-Star Double Spoke Composite Design in Jet Black. \",\"Price\":\"690.00\",\"Category\":\"WHEEL\"},{\"Code\":\"306\",\"Name\":\"15\\\\\\\" 7-Hole\",\"Description\":\"15\\\\\\\" x 5\\\\\\\" wheels with a 7-Hole Design. \",\"Price\":\"0.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2RE\",\"Name\":\"17\\\\\\\" Web Spoke\",\"Description\":\"17\\\\\\\" x 7\\\\\\\" wheels in our Web Spoke Design. \",\"Price\":\"600.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2RW\",\"Name\":\"17\\\\\\\" Web Spoke (Two Tone)\",\"Description\":\"17\\\\\\\" x 7\\\\\\\" wheels in two contrasting tones make our Web Spoke design even more appealing to the eye. \",\"Price\":\"600.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2RV\",\"Name\":\"Black Light Alloy Wheels\",\"Description\":\"Lightweight alloy wheels in a black finish. \",\"Price\":\"150.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2RK\",\"Name\":\"15\\\\\\\" 5-Star Spooler Alloy Wheels - Style 100\",\"Description\":\"15\\\\\\\" x 5\\\\\\\" alloy wheels in our 5-Star Spooler design. \",\"Price\":\"0.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2P9\",\"Name\":\"Silver Alloy Wheels\",\"Description\":\"Alloy wheels in silver. \",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"2GB\",\"Name\":\"16\\\\\\\" 4-Hole Circular Light Alloy Wheel, Runflat All Season\",\"Description\":\"16\\\\\\\" x 6.5\\\\\\\" lightweight alloy wheels in our 4-Hole Circular design. The set includes 4 rims, performance run-flat tires and the Tire Pressure Monitoring System sensors.\",\"Price\":\"0.00\",\"Category\":\"WHEEL\"},{\"Code\":\"RFPT\",\"Name\":\"Runflat Performance Tires\",\"Description\":\"Our 7\\\\\\\" x 17\\\\\\\" Web-spoke is our top of the line, 2-piece, lightweight alloy wheel designed for the sport-minded motorer. Also available in black finish.\",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"ZBO\",\"Name\":\"Performance Tires\",\"Description\":\"Performance tires are designed for use at higher speeds for a more \\\\\\\"sporty\\\\\\\" driving style. \",\"Price\":\"490.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"ZBR\",\"Name\":\"Performance Tires\",\"Description\":\"Performance tires are designed for use at higher speeds for a more \\\\\\\"sporty\\\\\\\" driving style. \",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"2GH\",\"Name\":\"16\\\\\\\" 6-Star Twin Spoke Black Wheels\",\"Description\":\"16\\\\\\\" x 6.5\\\\\\\" wheels in our 6-Star Twin Spoke design in a black finish. \",\"Price\":\"150.00\",\"Category\":\"WHEEL\"},{\"Code\":\"4C1\",\"Name\":\"Colour Line Carbon Black\",\"Description\":\"Compliment your interior\\u0027s design with this Carbon Black, textured detail on the lower dash and door armrests.\",\"Price\":\"0.00\",\"Category\":\"COLOURLINE\"},{\"Code\":\"4C2\",\"Name\":\"Colour Line Polar Beige\",\"Description\":\"Compliment your interior\\u0027s design with this Polar Beige textured detail on the lower dash and door armrests.\",\"Price\":\"0.00\",\"Category\":\"COLOURLINE\"},{\"Code\":\"4C3\",\"Name\":\"Colour Line Satellite Grey\",\"Description\":\"Compliment your interior\\u0027s design with this Satellite Gray, textured detail on the lower dash and door armrests.\",\"Price\":\"0.00\",\"Category\":\"COLOURLINE\"},{\"Code\":\"4CN\",\"Name\":\"Colour Line Toffy\",\"Description\":\"Compliment your interior\\u0027s design with this Lounge Toffee, textured detail on the lower dash and door armrests.\",\"Price\":\"0.00\",\"Category\":\"COLOURLINE\"},{\"Code\":\"4CW\",\"Name\":\"Interior Colour Polar Beige\",\"Description\":\"Polar Beige interiors give your MINI a crisp, clean and classy aesthetic. \",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"3A2\",\"Name\":\"Black Headlights\",\"Description\":\"Make it moody, where everything but the bulb is black. Opt for black headlamp housings to give your MINI a more aggressive look on the road.\",\"Price\":\"75.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"2PX\",\"Name\":\"17\\\\\\\" Cross Spoke Lt Alloy Black Wheels\",\"Description\":\"17\\\\\\\" x 7\\\\\\\" lightweight alloy wheels in our Cross Spoke design with a black finish. \",\"Price\":\"150.00\",\"Category\":\"WHEEL\"},{\"Code\":\"4C9\",\"Name\":\"Interior Trim Pepper White\",\"Description\":\"Interior detailing in Pepper White, for a finished, polished look. \",\"Price\":\"0.00\",\"Category\":\"TRIM\"},{\"Code\":\"302\",\"Name\":\"Alarm System\",\"Description\":\"Ultrasonic motion sensors register any unauthorized attempts to open the doors, bonnet, tailgate or windows. This system even has its own power supply, helping ensure it still works, even if your MINI\\u0027s battery has been removed. \",\"Price\":\"500.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"3BG\",\"Name\":\"White Mirror Caps\",\"Description\":\"Side-view mirrors in White. \",\"Price\":\"0.00\",\"Category\":\"CAP\"},{\"Code\":\"520\",\"Name\":\"Front Fog Lights\",\"Description\":\"Front Fog Lamps enhance visibility during inclement driving conditions and help add to a MINI\\u0027s sporty appearance\",\"Price\":\"250.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"5AA\",\"Name\":\"Rear Fog Lights\",\"Description\":\"The rear fog lamp helps make your MINI more visible from behind in poor visibility conditions.\",\"Price\":\"100.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"398\",\"Name\":\"Semi-Automatic Soft-Top\",\"Description\":\"For a little extra convenience, the semi-automatic soft-top can be lowered with the press of a toggle after releasing the security clamp. To close up, just toggle and clamp back down to secure. \",\"Price\":\"750.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"386\",\"Name\":\"Roof Rails\",\"Description\":\"Roof Rails make adding roof accessories much easier. Take your pick of rack or carrier and you will be on your way.\",\"Price\":\"300.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"4UL\",\"Name\":\"Flat Loading Floor\",\"Description\":\"Keep your cargo secure and tidy in the boot  of your MINI with the Luggage Compartment Net.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"413\",\"Name\":\"Float Loading Floor\",\"Description\":\"Loading and packing your MINI made easy with the flat loading floor.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"7HN\",\"Name\":\"John Cooper Works Package (Interior Elements)\",\"Description\":\"Take your MINI to the next level with the John Cooper Works Package which includes JCW door sill finishers, Gearshift knob and gaiter with red stitching, Handbrake gaiter with red stitching and Steering wheel with red stitching.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"2GSB\",\"Name\":\"17\\\\\\\" Conical Spoke Black Light Alloy Wheels\",\"Description\":\"17\\\\\\\" x 7\\\\\\\" black-coloured lightweight alloy wheels in our Conical Spoke design. Offered as an upgrade with the Sport Package.\",\"Price\":\"150.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2GES\",\"Name\":\"17\\\\\\\" Twin Blade Spoke Alloy Wheels\",\"Description\":\"17\\\\\\\" x 7\\\\\\\" alloy wheels in our Twin Blade Spoke design. Offered as an upgrade with the Sport Package.\",\"Price\":\"150.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2RUS\",\"Name\":\"17\\\\\\\" Black Star Bullet Alloy Wheels\",\"Description\":\"17\\\\\\\" x 7\\\\\\\"alloy wheels in our Black Star Bullet design. Offered as an upgrade with the Sport Package.\",\"Price\":\"250.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2GDB\",\"Name\":\"17\\\\\\\" Conical Spoke Light Alloy Wheels\",\"Description\":\"17\\\\\\\" x 7\\\\\\\" silver-coloured lightweight alloy wheels in our Conical Spoke design. \",\"Price\":\"0.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2N2B\",\"Name\":\"17\\\\\\\" Infinite Stream Spoke Wheel\",\"Description\":\"Exclusive 17\\\\\\\" x 7\\\\\\\" Infinite Stream wheels in silver make for a sprightly appearance and an even livelier drive. Equipped with 205/45 R17 performance runflat tires.\",\"Price\":\"0.00\",\"Category\":\"WHEEL\"},{\"Code\":\"7KM\",\"Name\":\"JCW Interior Package\",\"Description\":\"Complete the MINI look with the John Cooper Works Interior Package. This package includes the John Cooper Works Steering Wheel, Door Sill Finishers, sleek Anthracite Instrument Dials and Headliner*, and the characteristic, John Cooper Works Red Stitching on Shift-Knob Gaiter and Handbrake Gaiter and red Shift-Knob Diagram.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"7KN\",\"Name\":\" JCW Exterior Package\",\"Description\":\"For a polished, finishing touch, the John Cooper Works Exterior Package includes John Cooper Works Aerodynamic Kit, Bi-Xenon Headlights*, Sport Suspension and Dynamic Traction Control.\",\"Price\":\"0.00\",\"Category\":\"EXTERIOR\"},{\"Code\":\"4C4\",\"Name\":\"Colour Line Dark Tobacco\",\"Description\":\"Compliment your interior\\u0027s design with this Dark Tobacco textured detail on the lower dash and door armrests.\",\"Price\":\"0.00\",\"Category\":\"COLOURLINE\"},{\"Code\":\"4C5\",\"Name\":\"Colour Line Pure Red\",\"Description\":\"Compliment your interior\\u0027s design with this Pure Red textured detail on the lower dash and door armrests.\",\"Price\":\"0.00\",\"Category\":\"COLOURLINE\"},{\"Code\":\"2GG\",\"Name\":\"19\\\\\\\" Cross Spoke Crusher Light Alloy Wheels \",\"Description\":\"19\\\\\\\" x 8\\\\\\\" lightweight alloy wheels in our Cross Spoke Crusher design.\",\"Price\":\"750.00\",\"Category\":\"WHEEL\"},{\"Code\":\"3BH\",\"Name\":\"Sport Stripes White\",\"Description\":\"Twin parallel white  bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"500.00\",\"Category\":\"STRIPE\"},{\"Code\":\"4VB\",\"Name\":\"Center Rail One-Piece Full-Length\",\"Description\":\"Items can be clicked into place and moved backwards and forwards.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"2LT\",\"Name\":\"19\\\\\\\" Y-Spoke Light Anthracite Wheels\",\"Description\":\"19\\\\\\\" x 7.5\\\\\\\" Anthracite lightweight alloy wheels in our Y-Spoke design. Offered as an upgrade with the Sport Package.\",\"Price\":\"1380.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2F5\",\"Name\":\"17\\\\\\\" 5-Hole Black Star Alloy Wheels\",\"Description\":\"17\\\\\\\" x 7\\\\\\\"alloy wheels in our Black Star design.\",\"Price\":\"150.00\",\"Category\":\"WHEEL\"},{\"Code\":\"JA8\",\"Name\":\"Red Sport Stripes\",\"Description\":\"Twin parallel red bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"500.00\",\"Category\":\"STRIPE\"},{\"Code\":\"JA7\",\"Name\":\"Black Sport Stripes\",\"Description\":\"Twin parallel black bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"500.00\",\"Category\":\"STRIPE\"},{\"Code\":\"JBH\",\"Name\":\"Sport Stripes White\",\"Description\":\"Twin parallel white  bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"500.00\",\"Category\":\"STRIPE\"},{\"Code\":\"JRV\",\"Name\":\"Black Light Alloy Wheels\",\"Description\":\"Lightweight alloy wheels in a black finish. \",\"Price\":\"150.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2F8\",\"Name\":\"17\\\\\\\" Twin Spoke  Alloy Wheels\",\"Description\":\"17\\\\\\\" Twin Spoke  Black Turned Alloy Wheels with Cool Champagne Lining\",\"Price\":\"0.00\",\"Category\":\"WHEEL\"},{\"Code\":\"2GHC\",\"Name\":\"16\\\\\\\" 6-Star Twin Spoke Black Wheels\",\"Description\":\"16\\\\\\\" x 6.5\\\\\\\" wheels in our 6-Star Twin Spoke design in a black finish. \",\"Price\":\"150.00\",\"Category\":\"WHEEL\"},{\"Code\":\"4EM\",\"Name\":\"Colour Line Red Copper\",\"Description\":\"Red copper colour line\",\"Price\":\"0.00\",\"Category\":\"COLOURLINE\"},{\"Code\":\"2XB\",\"Name\":\"MINI Yours Soda Sport leather steering wheel\",\"Description\":\"The MINI Yours sports leather steering wheel offers the driver complete control of the radio, cruise control and Bluetooth operations in an eye-catching two-tone colour scheme. The outer rim featured in Black Walknappa leather while the inside rim complements in Satellite Grey.\",\"Price\":\"0.00\",\"Category\":\"INTERIOR\"},{\"Code\":\"2F7\",\"Name\":\"17\\\\\\\" Lt Alloy wheels MINI Yours Twin Spoke turned\",\"Description\":\"17\\\\\\\" Twin Spoke  Black Turned Alloy Wheels \",\"Price\":\"1000.00\",\"Category\":\"WHEEL\"},{\"Code\":\"PBD\",\"Name\":\"MINI Yours Piano Black\",\"Description\":\"Interior detailing, such as the instrument panel, door rings and door pockets, are coloured in Piano Black to give your MINI a sophisticated edge. \",\"Price\":\"0.00\",\"Category\":\"TRIM\"}]");

  describe("/options", function() {
    it('should return an object', function(done) {
      var res = client.get({"endPoint":"options"}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
    it('should return a collection of objects', function(done) {
      var res = client.get({"endPoint":"options"}, function(data) {
        assert(data.length, ">1", "expected more than 1 object");
        done();
      });
    });
  });

});
