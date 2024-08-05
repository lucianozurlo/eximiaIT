"use strict";

function eximia_Contact_Form() {
    if (jQuery('input[name]:not(.is-init), textarea[name]:not(.is-init)').length) {
        jQuery('input[name]:not(.is-init), textarea[name]:not(.is-init)').each(function () {
            let $this = jQuery(this);
            $this.addClass('is-init');
            $this.on('focus', function () {
                jQuery('label[for="' + $this.attr('name') + '"]').addClass('in-focus');
            }).on('blur', function () {
                jQuery('label[for="' + $this.attr('name') + '"]').removeClass('in-focus');
            });
        });
    }

    if (jQuery('.eximia-contact-form:not(.is-init)').length) {
        jQuery('.eximia-contact-form:not(.is-init)').each(function () {
            let $form = jQuery(this),
                $response = $form.find('.eximia-contact-form__response'),
                formData;

            $response.slideUp(1);

            $form.addClass('is-init');

            $form.on('submit', function (e) {
                e.preventDefault();

                $form.addClass('is-busy');
                $response.slideUp(200);

                formData = $form.serialize();
                jQuery.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: formData
                })
                    .done(function (response) {
                        $form.removeClass('is-busy');
                        $response.empty().removeClass('eximia-alert-danger').addClass('eximia-alert-success').slideDown(200);
                        $response.html('<span>' + response + '</span>');
                        $form.find('input:not([type="submit"]), textarea').val('');
                        setTimeout(function () {
                            $response.slideUp(200, function () {
                                jQuery(this).empty();
                            });
                        }, 5000, $response);
                    })
                    .fail(function (data) {
                        $form.removeClass('is-busy');
                        $response.empty().removeClass('eximia-alert-success').addClass('eximia-alert-danger').slideDown(200);
                        $response.html('<span>' + data.responseText + '</span>');
                        $form.addClass('is-error');
                        setTimeout(function () {
                            $form.removeClass('is-error');
                        }, 500, $form);
                    });

            });
        });
    }
}