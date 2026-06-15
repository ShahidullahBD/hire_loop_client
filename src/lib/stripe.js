import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLANS_PRICE_ID = {
    'seeker_pro': 'price_1ThAMMRyoxzs3tN3YXEd3Sud',
    'seeker_premium': 'price_1ThNjtRyoxzs3tN3Kud9XOhB',
    'recruiter_growth': 'price_1ThNknRyoxzs3tN3Q7CEMcmE',
    'recruiter_enterprise': 'price_1ThNliRyoxzs3tN31NTtcOki',
}   