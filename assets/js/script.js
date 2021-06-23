/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */



/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // calculate perStepWidth
    // for steps
    // and push it inline variable by css
    $(function () {
        // if ($('#step-steps').length) {
        //     let totalStep = $('#step-steps li').length;
        //     let stepWidth = $('#step-steps li').outerWidth();
        //     let stepStepsWidth = $('#step-steps').outerWidth();
        //     let perStepWidth = Math.ceil((stepStepsWidth - (stepWidth * totalStep)) / (totalStep - 1));
        //     let borderLine = `<span class="border-line"></span>`;
        //     $('#step-steps').attr('style', `--perStepWidth : calc(${perStepWidth}px)`);
        //     $('#step-steps li[data-step-target]').not(":last").append(borderLine);
        //     $('#step-steps li > .border-line').on('click', function (event) {
        //         event.stopPropagation();
        //     });
        // }
    });


});





/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


    // $('#checkout-step-app')
    $(function () {
        if ($('#checkout-step-app').length) {
            let step1 = $(".checkout-step-app .step-tab-panel[data-step='step1']");
            let step2 = $(".checkout-step-app .step-tab-panel[data-step='step2']");
            let step3 = $(".checkout-step-app .step-tab-panel[data-step='step3']");

            let btnNext = $(".checkout-step-app .btn[data-step-action='next']");
            let btnPrev = $(".checkout-step-app .btn[data-step-action='prev']");
            let btnFinish = $(".checkout-step-app .btn[data-step-action='finish']");

            let checkoutStepsFormValues = {
                email: '',
                username: '',
                password: '',
                anrede: '',
                titel: '',
                vorname: '',
                nachname: '',
                position: '',
                email2: '',
                emailWederholen: '',
                kennwort: '',
                kennwortWiederholen: '',
                firmenname: '',
                strake: '',
                nr: '',
                postiettzahl: '',
                ort: '',
                telefon: '',
            };

            function step1Validate() {
                $('.checkout-step-app').on('keyup', 'input', function (e) {
                    let step1Email = step1.find("input[name='email']").val();
                    if (step1Email == '' || step1Email.indexOf('@') == -1 || step1Email.indexOf('.') == -1) {
                        btnNext.addClass('disabled');
                    } else {
                        btnNext.removeClass('disabled');
                        checkoutStepsFormValues = {
                            ...checkoutStepsFormValues,
                            [e.currentTarget.name]: $(e.currentTarget).val()
                        }
                    }
                });
            }

            function step2Validate() {
                $('.checkout-step-app').on('keyup', 'input', function (e) {
                    let step2UserName = step2.find("input[name='username']").val();
                    let step2Password = step2.find("input[name='password']").val();
                    if (step2UserName == '' || step2Password == '') {
                        btnNext.addClass('disabled');
                    } else {
                        btnNext.removeClass('disabled');
                        checkoutStepsFormValues = {
                            ...checkoutStepsFormValues,
                            [e.currentTarget.name]: $(e.currentTarget).val()
                        }
                    }
                });
            }

            function step3Validate() {
                $('.checkout-step-app').on('keyup', 'input', function (e) {
                    let step3Anrede = step3.find("input[name='anrede']").val();
                    let step3Titel = step3.find("input[name='titel']").val();
                    let step3Vorname = step3.find("input[name='vorname']").val();
                    let step3Nachname = step3.find("input[name='nachname']").val();
                    let step3Position = step3.find("input[name='position']").val();
                    let step3Email = step3.find("input[name='email2']").val();
                    let step3EmailWiederholen = step3.find("input[name='emailWederholen']").val();
                    let step3Kennwort = step3.find("input[name='kennwort']").val();
                    let step3KennwortWiederholen = step3.find("input[name='kennwortWiederholen']").val();
                    let step3Firmenname = step3.find("input[name='firmenname']").val();
                    let step3Strake = step3.find("input[name='strake']").val();
                    let step3Nr = step3.find("input[name='nr']").val();
                    let step3Postiettzahl = step3.find("input[name='postiettzahl']").val();
                    let step3Ort = step3.find("input[name='ort']").val();
                    let step3Telefon = step3.find("input[name='telefon']").val();

                    if (step3Anrede == '' || step3Titel == '' || step3Vorname == '' || step3Nachname == '' || step3Position == '' || step3Email == '' || step3EmailWiederholen == '' || step3Kennwort == '' || step3Firmenname == '' || step3Strake == '' || step3Nr == '' || step3Postiettzahl == '' || step3Ort == '' || step3Telefon == '') {
                        btnNext.addClass('disabled');
                        btnFinish.addClass('disabled');
                    } else {
                        btnNext.removeClass('disabled');
                        btnFinish.removeClass('disabled');
                        checkoutStepsFormValues = {
                            ...checkoutStepsFormValues,
                            [e.currentTarget.name]: $(e.currentTarget).val()
                        }
                    }
                });
            }

            $('#checkout-step-app').steps({
                onFinish: function () {
                    $(".checkout-step-app .btn[data-step-action='next']").removeClass('disabled');
                    $(".checkout-step-app .btn[data-step-action='finish']").removeClass('disabled');
                    alert('complete !')
                },
                onChange: function (currentIndex, newIndex, stepDirection) {

                    // method call by currentIndex
                    currentIndex === 0 ? step1Validate() : currentIndex === 1 ? step2Validate() : step3Validate()

                    // disabled class toggle by currentIndex
                    if (currentIndex >= 1) {
                        $(".checkout-step-app .btn[data-step-target='step2']").removeClass('disabled');
                    } else {
                        $(".checkout-step-app .btn[data-step-target='step2']").addClass('disabled');
                    }

                    if (currentIndex >= 2) {
                        $(".checkout-step-app .btn[data-step-target='step3']").removeClass('disabled');
                    } else {
                        $(".checkout-step-app .btn[data-step-target='step3']").addClass('disabled');
                    }

                    $(".checkout-step-app .btn[data-step-action='next']").addClass('disabled');
                    $(".checkout-step-app .btn[data-step-action='finish']").addClass('disabled');
                    return true
                }
            });
        }
    });



    // $('#registration-step-app')
    $(function () {
        if ($('#registration-step-app').length) {
            let step1 = $(".registration-step-app .step-tab-panel[data-step='step1']");
            let step2 = $(".registration-step-app .step-tab-panel[data-step='step2']");
            let step3 = $(".registration-step-app .step-tab-panel[data-step='step3']");

            let btnNext = $(".registration-step-app .btn[data-step-action='next']");
            let btnPrev = $(".registration-step-app .btn[data-step-action='prev']");
            let btnFinish = $(".registration-step-app .btn[data-step-action='finish']");

            let registrationStepsFormValues = {
                email: '',
                password: '',
                confirmPassword: '',
                selectedLanguage: '',
                firstName: '',
                sureName: '',
                phone: '',
                companyName: '',
                selectedCountry: '',
                postCode: '',
                place: '',
                road: null,
                internetAddress: '',
                vatId: '',
                agreeWithTerms: null
            };

            function step1Validate() {

                $("#select-lang").change(function () {
                    let selectedLanguage = $(this).children("option:selected").val();
                    registrationStepsFormValues = {
                        ...registrationStepsFormValues,
                        selectedLanguage: selectedLanguage
                    }
                });


                if (step1.find('#agreeWithTerms').is(":checked") === false) {
                    btnNext.addClass('disabled');
                } else {
                    registrationStepsFormValues = {
                        ...registrationStepsFormValues,
                        agreeWithTerms: step1.find('#agreeWithTerms').is(":checked")
                    }
                }

                function setAgreeWithTerms () {
                    step1.find('#agreeWithTerms').on('click', function () {
                        if ($('#agreeWithTerms').is(":checked")) {
                            registrationStepsFormValues = {
                                ...registrationStepsFormValues,
                                agreeWithTerms: true
                            }
                        } else {
                            registrationStepsFormValues = {
                                ...registrationStepsFormValues,
                                agreeWithTerms: false
                            }
                        }
                    });    
                }
                setAgreeWithTerms();
            
        
                $('.registration-step-app').on('keyup', 'input', function (e) {
                    let step1Email = step1.find("input[name='email']").val();
                    let step1Password = step1.find("input[name='password']").val();
                    let step1ConfirmPassword = step1.find("input[name='confirmPassword']").val();
                    let step1SelectedLanguage = step1.find("select#select-lang option:selected").val();
             
                    if (step1Email == '' || step1Email.indexOf('@') == -1 || step1Email.indexOf('.') == -1 || step1Password == '' || step1ConfirmPassword == '' || step1SelectedLanguage == '') {
                        btnNext.addClass('disabled');
                    } else {

                        if(registrationStepsFormValues.agreeWithTerms === true) {
                            btnNext.removeClass('disabled');
                            registrationStepsFormValues = {
                                ...registrationStepsFormValues,
                                selectedLanguage: step1SelectedLanguage,
                                [e.currentTarget.name]: $(e.currentTarget).val()
                            }
                        }
                        step1.find('#agreeWithTerms').on('click', function () {
                            if ($('#agreeWithTerms').is(":checked")) {
                                registrationStepsFormValues = {
                                    ...registrationStepsFormValues,
                                    agreeWithTerms: true
                                }
                                btnNext.removeClass('disabled');
                            } else {
                                registrationStepsFormValues = {
                                    ...registrationStepsFormValues,
                                    agreeWithTerms: false
                                }
                                btnNext.addClass('disabled');
                            }
                        });  
                    }
                });
            }


            function step2Validate() {
                $('.registration-step-app').on('keyup', 'input', function (e) {
                    let step2FirstName = step2.find("input[name='firstName']").val();
                    let step2SureName = step2.find("input[name='sureName']").val();
                    let step2Phone = step2.find("input[name='phone']").val();

                    if (step2FirstName == '' || step2SureName == '' || step2Phone == '') {
                        btnNext.addClass('disabled');
                    } else {
                        btnNext.removeClass('disabled');
                        registrationStepsFormValues = {
                            ...registrationStepsFormValues,
                            [e.currentTarget.name]: $(e.currentTarget).val()
                        }
                    }
                });
            }

            function step3Validate() {
                $('.registration-step-app').on('keyup', 'input', function (e) {

                    $("#select-country").change(function () {
                        var selectedCountry = $(this).children("option:selected").val();
                        registrationStepsFormValues = {
                            ...registrationStepsFormValues,
                            selectedCountry: selectedCountry
                        }
                    });

                    let step3CompanyName = step3.find("input[name='companyName']").val();
                    let step3PostCode = step3.find("input[name='postCode']").val();
                    let step3Place = step3.find("input[name='place']").val();
                    let step3Road = step3.find("input[name='road']").val();
                    let step3InternetAddress = step3.find("input[name='internetAddress']").val();
                    let step3vatId = step3.find("input[name='vatId']").val();
                    let step3SelectedCountry = step1.find("select#select-country option:selected").val();

                    if (step3CompanyName == '' || step3PostCode == '' || step3Place == '' || step3Road == '' || step3InternetAddress == '' || step3vatId == '' || step3SelectedCountry == '') {
                        btnNext.addClass('disabled');
                        btnFinish.addClass('disabled');
                    } else {
                        btnNext.removeClass('disabled');
                        btnFinish.removeClass('disabled');
                        registrationStepsFormValues = {
                            ...registrationStepsFormValues,
                            selectedCountry: step3SelectedCountry,
                            [e.currentTarget.name]: $(e.currentTarget).val()
                        }
                    }
                });
            }

            $('#registration-step-app').steps({
                onFinish: function () {
                    $(".registration-step-app .btn[data-step-action='next']").removeClass('disabled');
                    $(".registration-step-app .btn[data-step-action='finish']").removeClass('disabled');
                    alert('complete !')
                },
                onChange: function (currentIndex, newIndex, stepDirection) {

                    //method call by currentIndex
                    currentIndex === 0 ? step1Validate() : currentIndex === 1 ? step2Validate() : step3Validate()

                    // disabled class toggle by currentIndex
                    if (currentIndex >= 1) {
                        $(".registration-step-app .btn[data-step-target='step2']").removeClass('disabled');
                    } else {
                        $(".registration-step-app .btn[data-step-target='step2']").addClass('disabled');
                    }

                    if (currentIndex >= 2) {
                        $(".registration-step-app .btn[data-step-target='step3']").removeClass('disabled');
                    } else {
                        $(".registration-step-app .btn[data-step-target='step3']").addClass('disabled');
                    }

                    $(".registration-step-app .btn[data-step-action='next']").addClass('disabled');
                    $(".registration-step-app .btn[data-step-action='finish']").addClass('disabled');

                    return true
                }
            });
        }
    })




    // Start counting, do this on DOM ready or with Waypoints.
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 30,
            time: 2000
        });
    }


    // $('.datepicker')
    if ($('.datepicker').length) {
        $(function () {
            $(".datepicker").datepicker();
        });
    }


    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });


});

