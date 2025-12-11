import React, { useState } from 'react';

export const SettingsPage: React.FC = () => {
    const [emailNotifications, setEmailNotifications] = useState({
        marketing: false,
        security: true,
        updates: true
    });
    const [theme, setTheme] = useState('system');

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
                    <p className="text-slate-500 text-sm mt-1">Manage your account settings and preferences.</p>
                </div>
                <button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
                    Save Changes
                </button>
            </div>

            <div className="grid gap-6">
                {/* Profile Section */}
                <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-800">Profile Information</h3>
                        <p className="text-slate-500 text-sm">Update your account's profile information and email address.</p>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-2xl">
                                U
                            </div>
                            <div>
                                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    Change Avatar
                                </button>
                                <p className="text-xs text-slate-400 mt-1">JPG, GIF or PNG. 1MB max.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    defaultValue="Demo"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-slate-700"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    defaultValue="User"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-slate-700"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    defaultValue="demo@user.com"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-slate-700"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notifications Section */}
                <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-800">Notifications</h3>
                        <p className="text-slate-500 text-sm">Decide which communications you'd like to receive.</p>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="flex h-6 items-center">
                                <input
                                    id="notif-marketing"
                                    type="checkbox"
                                    checked={emailNotifications.marketing}
                                    onChange={(e) => setEmailNotifications({ ...emailNotifications, marketing: e.target.checked })}
                                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>
                            <div className="text-sm">
                                <label htmlFor="notif-marketing" className="font-medium text-slate-800">Marketing emails</label>
                                <p className="text-slate-500">Receive emails about new products, features, and more.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex h-6 items-center">
                                <input
                                    id="notif-security"
                                    type="checkbox"
                                    checked={emailNotifications.security}
                                    onChange={(e) => setEmailNotifications({ ...emailNotifications, security: e.target.checked })}
                                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>
                            <div className="text-sm">
                                <label htmlFor="notif-security" className="font-medium text-slate-800">Security emails</label>
                                <p className="text-slate-500">Receive emails about your account security.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Appearance Section */}
                <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-800">Appearance</h3>
                        <p className="text-slate-500 text-sm">Customize how the application looks on your device.</p>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setTheme('light')}
                                className={`flex-1 p-4 border rounded-lg flex flex-col items-center gap-2 transition-all ${theme === 'light' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'}`}
                            >
                                <div className="h-20 w-full bg-slate-100 rounded border border-slate-200"></div>
                                <span className={`text-sm font-medium ${theme === 'light' ? 'text-indigo-700' : 'text-slate-600'}`}>Light</span>
                            </button>
                            <button
                                onClick={() => setTheme('dark')}
                                className={`flex-1 p-4 border rounded-lg flex flex-col items-center gap-2 transition-all ${theme === 'dark' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'}`}
                            >
                                <div className="h-20 w-full bg-slate-800 rounded border border-slate-700"></div>
                                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-indigo-700' : 'text-slate-600'}`}>Dark</span>
                            </button>
                            <button
                                onClick={() => setTheme('system')}
                                className={`flex-1 p-4 border rounded-lg flex flex-col items-center gap-2 transition-all ${theme === 'system' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'}`}
                            >
                                <div className="h-20 w-full bg-gradient-to-r from-slate-100 to-slate-800 rounded border border-slate-200"></div>
                                <span className={`text-sm font-medium ${theme === 'system' ? 'text-indigo-700' : 'text-slate-600'}`}>System</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Security Section with Password Change */}
                <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-800">Security</h3>
                        <p className="text-slate-500 text-sm">Ensure your account is secure by setting a strong password.</p>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-slate-700"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                                <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-slate-700"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Confirm New Password</label>
                                <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-slate-700"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
