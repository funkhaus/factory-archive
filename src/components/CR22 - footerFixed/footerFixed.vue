<template>
    <div class="footer-fixed">
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
            <div class="footer-column is-link">
                Forever Linda<br/>
                <a class="link" href="#">Donate in her honor.</a>
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
.footer-fixed {
    position: fixed;
    bottom: 0;
    left: 0; 
    right: 0;
    
    background-color: var(--color-black);
    color: var(--color-company);
    font-family: 'RM Neue';
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4285;

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
        align-items: flex-end;
        justify-content: space-between;
        
        max-width: var(--unit-max-width);
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

        address {
            //padding offset to account for multiple addresses
            padding-left: 40px;
            margin-top: 16px;
            font-style: normal;
        }
    }

    .is-link {
        text-align: center;
        line-height: 1.71428;
        margin-bottom: 12px;
        .link {
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
        line-height: 1.71428;

        .logo {
            margin-top: 80px;
        }
        .footer-columns {
            flex-direction: column;
            margin-top: 50px;
            margin-bottom: 60px;
        }
        .is-addresses {
            order: 1;
            justify-content: space-around;
            margin-top: 16px;
            margin-bottom: 40px;

            address {
                padding: 0 16px;
            }
        }
        .is-link {
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
