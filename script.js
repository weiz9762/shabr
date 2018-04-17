$(function() {

    //  Initialize Firebase
    var config = {
        apiKey: "AIzaSyAcpeOkAbFgbCn7g0o6JLrgwr_ymBLnqIA",
        authDomain: "shabr-8c9f0.firebaseapp.com",
        databaseURL: "https://shabr-8c9f0.firebaseio.com",
        projectId: "shabr-8c9f0",
        storageBucket: "shabr-8c9f0.appspot.com",
        messagingSenderId: "531181915769"
    };
    firebase.initializeApp(config);

    function updateReceiver(received) {
        var startAnew;
        let data = received.val();
        let slideshow = $('#slideshow');
        let lastSlide = slideshow.lastChild;
        var c = document.getElementById("slideshow").lastChild.childNodes;
        if (c[3] == undefined) {
            startAnew = true;
        }
        else {
            startAnew = false;
        }

        for (var key in data) {
            var person = data[key];
            if (startAnew) {
                let newCarouselItem = $('<div></div>').addClass('carousel-item row no-gutters');
                let cardDeck = $('<div></div>').addClass('card-deck');
                let card = $('<div></div>').addClass('card');
                let cardHeader = $('<div></div>').addClass('card-header');
                cardHeader.text(person.displayName);
                let cardBody = $('<div></div>').addClass('card-body');
                let cardText = $('<p></p>').addClass('card-text');
                cardText.text(person.message);
                let cardFooter = $('<div></div>').addClass('card-footer');
                let emailText = $('<small></small>').addClass('text-muted');
                emailText.text(person.email);

                cardFooter.append(emailText);
                cardBody.append(cardText);
                card.append(cardHeader);
                card.append(cardBody);
                card.append(cardFooter);
                cardDeck.append(card);

                newCarouselItem.append(cardDeck);
                let slideshow = $('#slideshow');
                slideshow.append(newCarouselItem);
            }
            else {
                let slideshow = $('#slideshow');
                let lastCarouselItem = slideshow.lastChild;
                let cardDeck = $('<div></div>').addClass('card-deck');
                let card = $('<div></div>').addClass('card');
                let cardHeader = $('<div></div>').addClass('card-header');
                cardHeader.text(person.displayName);
                let cardBody = $('<div></div>').addClass('card-body');
                let cardText = $('<p></p>').addClass('card-text');
                cardText.text(person.message);
                let cardFooter = $('<div></div>').addClass('card-footer');
                let emailText = $('<small></small>').addClass('text-muted');
                emailText.text(person.email);

                cardFooter.append(emailText);
                cardBody.append(cardText);
                card.append(cardHeader);
                card.append(cardBody);
                card.append(cardFooter);
                cardDeck.append(card);

                lastCarouselItem.append(cardDeck);
                slideshow.append(lastCarouselItem);
            }
        }
    }
    var fbase = firebase.database().ref('Testimonials');
    fbase.on('value', updateReceiver);

    login();

    function login() {
        function newLogin(user) {
            if (user) {
                application(user);
            }
            else {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithRedirect(provider);
            }
        }
        var auth = firebase.auth();
        auth.onAuthStateChanged(newLogin);
    }

    function application(user) {
        function updateReceived(received) {
            var startAnew;
            let data = received.val();
            let slideshow = $('#slideshow');
            let lastSlide = slideshow.lastChild;
            var c = document.getElementById("slideshow").lastChild.childNodes;
            if (c[3] == undefined) {
                startAnew = true;
            }
            else {
                startAnew = false;
            }

            for (var key in data) {
                var person = data[key];
                if (startAnew) {
                    let newCarouselItem = $('<div></div>').addClass('carousel-item row no-gutters');
                    let cardDeck = $('<div></div>').addClass('card-deck');
                    let card = $('<div></div>').addClass('card');
                    let cardHeader = $('<div></div>').addClass('card-header');
                    cardHeader.text(person.displayName);
                    let cardBody = $('<div></div>').addClass('card-body');
                    let cardText = $('<p></p>').addClass('card-text');
                    cardText.text(person.message);
                    let cardFooter = $('<div></div>').addClass('card-footer');
                    let emailText = $('<small></small>').addClass('text-muted');
                    emailText.text(person.email);

                    cardFooter.append(emailText);
                    cardBody.append(cardText);
                    card.append(cardHeader);
                    card.append(cardBody);
                    card.append(cardFooter);
                    cardDeck.append(card);

                    newCarouselItem.append(cardDeck);
                    let slideshow = $('#slideshow');
                    slideshow.append(newCarouselItem);
                }
                else {
                    let slideshow = $('#slideshow');
                    let lastCarouselItem = slideshow.lastChild;
                    let cardDeck = $('<div></div>').addClass('card-deck');
                    let card = $('<div></div>').addClass('card');
                    let cardHeader = $('<div></div>').addClass('card-header');
                    cardHeader.text(person.displayName);
                    let cardBody = $('<div></div>').addClass('card-body');
                    let cardText = $('<p></p>').addClass('card-text');
                    cardText.text(person.message);
                    let cardFooter = $('<div></div>').addClass('card-footer');
                    let emailText = $('<small></small>').addClass('text-muted');
                    emailText.text(person.email);

                    cardFooter.append(emailText);
                    cardBody.append(cardText);
                    card.append(cardHeader);
                    card.append(cardBody);
                    card.append(cardFooter);
                    cardDeck.append(card);

                    lastCarouselItem.append(cardDeck);
                    slideshow.append(lastCarouselItem);
                }
            }
        }
        $('#submitBtn').click(function() {
            let testimonial = {};
            let testimonialMessage = $('#testimonialComment').val();
            var fb = firebase.database().ref('Testimonials');
            testimonial.displayName = user.displayName;
            testimonial.email = user.email;
            testimonial.message = testimonialMessage;
            fb.child(user.uid).set(testimonial);
            fb.on('value', updateReceived);
        });
    }
});
