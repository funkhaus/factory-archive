<template>
    <div class="footer">
        <!-- logo slot -->
        <div class="logo">
            <slot name="logo" />
        </div>

        <div class="footer-columns">

            <!-- address columns -->
            <div class="footer-column is-addresses">
                <slot name="addresses" />
            </div>

            <!-- special columns -->
            <div class="footer-column is-special">
                Forever Linda<br/>
                <a class="special-link" href="#">Donate in her honor.</a>
            </div>

            <!-- social media columns -->
            <div class="footer-column is-social">
                <ul class="social-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    props: {
        menuLocation: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 0; 
    right: 0;
    
    background-color: var(--color-black);
    color: var(--color-company);
    font-family: 'RM Neue';
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4285em;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 400px;

    // shorten padding for better address management
    padding: 0 20px;

    .logo {
        display: block;
        text-align: center;
        margin-top: 50px;
    }

    .footer-columns {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        
        // set max-width to prevent stretching too much on big screen
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 16px;
    }

    .footer-column {
        flex: 1 1;
        width: 100%;
    }

    .is-addresses {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;

        // Don't know className of multiple address will be slotted in.
        address {
            //padding offset to account for multiple addresses
            padding-left: 40px;
            margin-bottom: 16px;
        }
    }

    .is-special {
        text-align: center;
        .special-link {
            text-decoration: underline;
        }
    }

    .is-social {
        display: flex;
        justify-content: flex-end;
        .social-links {
            list-style: none;
            margin: 0;

            //padding offset to account for footer padding
            padding-right: 40px;
        }
    }

    @media #{$lt-tablet} {
        line-height: 1.71428em;

        .footer-columns {
            flex-direction: column;
            margin-top: 16px;
            margin-bottom: 60px;
        }
        .is-addresses {
            order: 1;
            justify-content: space-around;
            margin: 32px 0;

            address {
                padding: 0 16px;
            }
        }
        .is-special {
            order: 2;
        }
        .is-social {
            order: 0;
            justify-content: center;
            .social-links {
                padding: 0;
                text-align: center;
            }
        }
    }
}
</style>
