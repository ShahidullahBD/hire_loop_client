import PricingTabs from "@/components/plans/PricingTabs";


export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-bold">
          Simple Pricing
        </h1>

        <p className="mt-4 text-lg text-default-500">
          Choose the perfect plan for your job search
          or recruitment needs.
        </p>
      </div>

      <div className="mt-14">
        <PricingTabs />
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-8 max-w-3xl space-y-4">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">
              Can I cancel anytime?
            </h3>

            <p className="mt-2 text-default-500">
              Yes. You can cancel your subscription at
              any time.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">
              What payment methods are supported?
            </h3>

            <p className="mt-2 text-default-500">
              We support major credit cards and online
              payment providers.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">
              Can I switch plans later?
            </h3>

            <p className="mt-2 text-default-500">
              Absolutely. Upgrade or downgrade anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}