import React from "react";
import Chatbot from "./Chatbot";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, TrendingDown } from "lucide-react";

/* ---------------- MOCK TIME SERIES ---------------- */
const timeSeries = [
  { t: "00", temp: 88, rpm: 2600, health: 92 },
  { t: "01", temp: 90, rpm: 2700, health: 90 },
  { t: "02", temp: 93, rpm: 2900, health: 88 },
  { t: "03", temp: 95, rpm: 3050, health: 86 },
  { t: "04", temp: 97, rpm: 3200, health: 84 },
  { t: "05", temp: 99, rpm: 3350, health: 82 },
];

/* ---------------- COMPONENT ---------------- */
const DocumentProcessor = () => {
  return (
    <div className="w-full space-y-8">

      {/* ================= MASTER DIAGNOSTIC CHART ================= */}
      <Card className="cosmic-glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <Activity className="h-6 w-6 text-primary" />
            Predictive Vehicle Diagnostics Timeline
          </CardTitle>
        </CardHeader>

        <CardContent className="h-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={timeSeries}>
              {/* ===== DEFINITIONS ===== */}
              <defs>
                <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity={0.05} />
                </linearGradient>

                <linearGradient id="rpmGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>

                <linearGradient id="healthGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity={0.08} />
                </linearGradient>
              </defs>

              {/* ===== GRID ===== */}
              <CartesianGrid strokeDasharray="3 6" strokeOpacity={0.15} />

              {/* ===== AXES ===== */}
              <XAxis dataKey="t" />
              <YAxis yAxisId="left" domain={[80, 105]} hide />
              <YAxis yAxisId="right" orientation="right" domain={[2500, 3500]} hide />

              <Tooltip
                contentStyle={{
                  background: "rgba(0,0,0,0.8)",
                  borderRadius: "8px",
                  border: "none",
                  color: "#fff",
                }}
              />

              {/* ===== THRESHOLDS ===== */}
              <ReferenceLine
                y={100}
                yAxisId="left"
                stroke="#ef4444"
                strokeDasharray="6 6"
                label={{ value: "Thermal Risk", fill: "#ef4444" }}
              />

              <ReferenceLine
                y={85}
                yAxisId="left"
                stroke="#facc15"
                strokeDasharray="4 4"
                label={{ value: "Health Warning", fill: "#facc15" }}
              />

              {/* ===== HEALTH DEGRADATION ===== */}
              <Area
                yAxisId="left"
                dataKey="health"
                type="monotone"
                stroke="#22c55e"
                fill="url(#healthGrad)"
                strokeWidth={2}
                isAnimationActive
              />

              {/* ===== ENGINE TEMP ===== */}
              <Area
                yAxisId="left"
                dataKey="temp"
                type="monotone"
                stroke="#ef4444"
                fill="url(#tempGrad)"
                strokeWidth={2}
                isAnimationActive
              />

              {/* ===== RPM OVERLAY ===== */}
              <Line
                yAxisId="right"
                dataKey="rpm"
                type="monotone"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={false}
                isAnimationActive
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* ================= DIAGNOSTIC INSIGHT ================= */}
      <Card className="cosmic-glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <TrendingDown className="h-6 w-6 text-primary" />
            AI Diagnostic Insight
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            <strong>Observed Trend:</strong> Continuous rise in engine
            temperature and RPM correlated with steady health degradation.
          </p>
          <p>
            <strong>Model:</strong> Isolation Forest + Temporal Trend Analysis
          </p>
          <p className="text-muted-foreground">
            Recommendation: Proactive coolant inspection within next service
            cycle.
          </p>
        </CardContent>
      </Card>


      <Card className="cosmic-glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <TrendingDown className="h-6 w-6 text-primary" />
            AI Diagnostic Insight
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-sm">
          

  
          <p className="text-muted-foreground">
            Recommendation: Proactive coolant inspection within next service
            cycle.
          </p>

          {/* ---- 3D CAR MODEL ---- */}
          <div className="pt-4">
            <Chatbot />
          </div>
        </CardContent>
      </Card>

    </div>


  );
};

export default DocumentProcessor;
