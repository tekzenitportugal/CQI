'use client';

import { useMemo, useState } from 'react';
import { Container } from '@/components/ui/Container';
import styles from './RoiCalculatorSection.module.scss';

export type RoiCalculatorInputs = {
  interactionVolume: number;
  costPerInteraction: number;
  repeatContactsPct: number;
  customerBase: number;
  churnRatePct: number;
  revenuePerCustomer: number;
};

export type RoiCalculatorSectionData = {
  defaults: RoiCalculatorInputs;
  footnote: string;
};

type RoiCalculatorSectionProps = {
  data: RoiCalculatorSectionData;
};

// Ceilings from CQI programme material — fixed, not user-editable.
const FCR_CEILING = 0.3;
const AHT_CEILING = 0.15;
const CHURN_CEILING = 0.25;
const COST_TO_SERVE_CAP = 0.3;

function formatCompactEuro(value: number) {
  const abs = Math.abs(value);
  if (abs >= 1_000_000) return `€${(value / 1_000_000).toFixed(2)}m`;
  if (abs >= 1_000) return `€${Math.round(value / 1_000)}k`;
  return `€${Math.round(value)}`;
}

function formatNumber(value: number) {
  return Math.round(value).toLocaleString('en-US');
}

function formatCurrencyUnit(value: number) {
  return `€${value.toFixed(2).replace(/\.00$/, '')}`;
}

function useRoiCalculation(inputs: RoiCalculatorInputs) {
  return useMemo(() => {
    const { interactionVolume, costPerInteraction, repeatContactsPct, customerBase, churnRatePct, revenuePerCustomer } =
      inputs;

    const totalContactCost = interactionVolume * costPerInteraction;
    const repeatContacts = interactionVolume * (repeatContactsPct / 100);
    const repeatContactsRemovedValue = repeatContacts * FCR_CEILING * costPerInteraction;
    const remainingInteractions = interactionVolume - repeatContacts * FCR_CEILING;
    const handlingTimeSavingValue = remainingInteractions * AHT_CEILING * costPerInteraction;
    const costToServeCap = totalContactCost * COST_TO_SERVE_CAP;
    const costToServeCombined = Math.min(repeatContactsRemovedValue + handlingTimeSavingValue, costToServeCap);
    const revenueAtRisk = customerBase * (churnRatePct / 100) * revenuePerCustomer;
    const revenueRetained = revenueAtRisk * CHURN_CEILING;
    const customersRetained = customerBase * (churnRatePct / 100) * CHURN_CEILING;
    const totalValue = costToServeCombined + revenueRetained;
    const conservativeCase = totalValue / 3;
    const referenceMax = Math.max(repeatContactsRemovedValue, handlingTimeSavingValue, revenueRetained, 1);

    return {
      totalContactCost,
      repeatContacts,
      repeatContactsRemovedValue,
      remainingInteractions,
      handlingTimeSavingValue,
      costToServeCombined,
      revenueAtRisk,
      revenueRetained,
      customersRetained,
      totalValue,
      conservativeCase,
      referenceMax,
    };
  }, [inputs]);
}

type FieldProps = {
  label: string;
  helper?: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
};

function Field({ label, helper, value, onChange, suffix }: FieldProps) {
  return (
    <div className={styles.field}>
      <p className={styles.fieldLabel}>{label}</p>
      {helper && <p className={styles.fieldHelper}>{helper}</p>}
      <div className={styles.inputWrap}>
        <input
          type="number"
          className={styles.input}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
        />
        {suffix && <span className={styles.inputSuffix}>{suffix}</span>}
      </div>
    </div>
  );
}

type BarRowProps = {
  label: string;
  value: number;
  referenceMax: number;
  tone?: 'strong' | 'light';
};

function BarRow({ label, value, referenceMax, tone = 'strong' }: BarRowProps) {
  const width = Math.max(0, Math.min(100, (value / referenceMax) * 100));
  return (
    <div className={styles.barRow}>
      <div className={styles.barHeading}>
        <p className={styles.barLabel}>{label}</p>
        <p className={styles.barValue}>{formatCompactEuro(value)}</p>
      </div>
      <div className={styles.barTrack}>
        <div
          className={`${styles.barFill} ${tone === 'light' ? styles.barFillLight : ''}`.trim()}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

type BreakdownRowProps = {
  line: string;
  basis: string;
  value: string;
};

function BreakdownRow({ line, basis, value }: BreakdownRowProps) {
  return (
    <>
      <p className={styles.breakdownLine}>{line}</p>
      <p className={styles.breakdownBasis}>{basis}</p>
      <p className={styles.breakdownValue}>{value}</p>
    </>
  );
}

/** Figma "Calculator" (6079:30861): live ROI inputs + outcome ceilings from CQI programme material. */
export function RoiCalculatorSection({ data }: RoiCalculatorSectionProps) {
  const [inputs, setInputs] = useState(data.defaults);
  const result = useRoiCalculation(inputs);

  const setField = (key: keyof RoiCalculatorInputs) => (value: number) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.calculator}>
          <div className={styles.inputs}>
            <Field
              label="Annual interaction volume"
              helper="Calls, chats and messaging sessions handled per year"
              value={inputs.interactionVolume}
              onChange={setField('interactionVolume')}
            />
            <Field
              label="Average cost per interaction (€)"
              helper="Fully loaded"
              value={inputs.costPerInteraction}
              onChange={setField('costPerInteraction')}
            />
            <Field
              label="Repeat contacts (%)"
              helper="Share of interactions that are a customer coming back on the same issue"
              value={inputs.repeatContactsPct}
              onChange={setField('repeatContactsPct')}
            />
            <Field
              label="Customer base"
              helper="Active customers or subscribers"
              value={inputs.customerBase}
              onChange={setField('customerBase')}
            />
            <Field
              label="Annual churn rate (%)"
              value={inputs.churnRatePct}
              onChange={setField('churnRatePct')}
            />
            <Field
              label="Annual revenue per customer (€)"
              value={inputs.revenuePerCustomer}
              onChange={setField('revenuePerCustomer')}
            />
          </div>

          <div className={styles.results}>
            <div className={styles.resultsTop}>
              <p className={styles.resultsEyebrow}>Annual value at stake</p>
              <div className={styles.totalCard}>
                <p className={styles.totalLabel}>Total, at the programme ceiling</p>
                <p className={styles.totalValue}>{formatCompactEuro(result.totalValue)}</p>
                <p className={styles.totalLabel}>
                  Conservative case (one third of each ceiling): {formatCompactEuro(result.conservativeCase)}
                </p>
              </div>

              <div className={styles.bars}>
                <BarRow
                  label="Repeat contacts removed up to 30% FCR improvement"
                  value={result.repeatContactsRemovedValue}
                  referenceMax={result.referenceMax}
                />
                <BarRow
                  label="Handling-time saving up to 15% AHT reduction"
                  value={result.handlingTimeSavingValue}
                  referenceMax={result.referenceMax}
                />
                <BarRow
                  label="Revenue retained up to 25% churn reduction"
                  value={result.revenueRetained}
                  referenceMax={result.referenceMax}
                />
                <BarRow
                  label="Conservative case one third of each ceiling"
                  value={result.conservativeCase}
                  referenceMax={result.referenceMax}
                  tone="light"
                />
              </div>
            </div>

            <div className={styles.breakdown}>
              <span className={styles.breakdownHeaderCell}>Line</span>
              <span className={styles.breakdownHeaderCell}>Basis</span>
              <span className={styles.breakdownHeaderCell}>Annual value</span>

              <BreakdownRow
                line="Repeat contacts removed"
                basis={`${formatNumber(result.repeatContacts)} repeat contacts × 30% × ${formatCurrencyUnit(inputs.costPerInteraction)}`}
                value={formatCompactEuro(result.repeatContactsRemovedValue)}
              />
              <BreakdownRow
                line="Handling-time saving"
                basis={`${formatNumber(result.remainingInteractions)} remaining interactions × 15% × ${formatCurrencyUnit(inputs.costPerInteraction)}`}
                value={formatCompactEuro(result.handlingTimeSavingValue)}
              />
              <BreakdownRow
                line="Cost-to-serve, combined"
                basis={`Capped at 30% of ${formatCompactEuro(result.totalContactCost)} total contact cost`}
                value={formatCompactEuro(result.costToServeCombined)}
              />
              <BreakdownRow
                line="Revenue retained"
                basis={`${formatCompactEuro(result.revenueAtRisk)} revenue at risk × 25%`}
                value={formatCompactEuro(result.revenueRetained)}
              />
              <BreakdownRow
                line="Customers retained"
                basis="At the churn-reduction ceiling"
                value={`${formatNumber(result.customersRetained)} customers`}
              />
            </div>

            <p className={styles.footnote}>{data.footnote}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
