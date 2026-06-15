"use client";

import { Card, Button } from "@heroui/react";
import { CircleCheckFill } from "@gravity-ui/icons";

export default function PricingCard({ plan }) {
  return (
    <Card
      className={`h-full ${plan.popular
        ? "border-2 border-primary shadow-lg"
        : ""
        }`}
    >
      <Card.Header>
        <div className="w-full">
          {plan.popular && (
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Most Popular
            </span>
          )}

          <h3 className="mt-3 text-2xl font-bold">
            {plan.name}
          </h3>

          <div className="mt-3 flex items-end gap-1">
            <span className="text-4xl font-bold">
              {plan.price}
            </span>

            <span className="text-default-500">
              {plan.period}
            </span>
          </div>
        </div>
      </Card.Header>

      <Card.Content>
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2"
            >
              <CircleCheckFill className="mt-1 shrink-0 text-green-500" />

              <span className="text-sm text-default-600">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </Card.Content>

      <Card.Footer>
        <form action="/api/checkout_sessions" method="POST">
          <input type="hidden" name="plan_id" value={plan.id} />
          <section>
            <Button
              variant="primary"
              color={plan.popular ? "primary" : "secondary"}
              className="w-full"
              type="submit" role="link">
              Checkout
            </Button>
          </section>
        </form>        
      </Card.Footer>
    </Card>
  );
}